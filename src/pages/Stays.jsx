import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import StaysDetails from "../components/main/StaysDetails";
import SearchForm from "../components/main/SearchForm";
import styles from "../styles/Stays.module.css";
import logoImg from "../assets/logo.svg";

const Stays = () => {
  const [stays, setStays] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSnapshot = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "stays"));
        let staysArr = [];
        querySnapshot.forEach((doc) => {
          staysArr.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setStays(staysArr);
        setIsLoading(false);
      } catch (error) {
        toast.error("Could not fetch stays");
      }
    };

    fetchSnapshot();
  }, []);

  // useEffect(() => {

  // }, [])

  // search query
  const onSearchStay = async (queryData) => {
    const staysRef = collection(db, "stays");

    const q = query(
      staysRef,
      where("city", "==", queryData.location),
      where("maxGuests", "==", queryData.guest)
    );

    // execute query to obtain snapshot
    const querySnap = await getDocs(q);

    let staysArr = [];
    querySnap.forEach((doc) => {
      staysArr.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    console.log(staysArr);
    setStays(staysArr);
    setIsLoading(false);
  };

  useEffect(() => {
    onSearchStay();
  }, []);

  return (
    <div className={`container ${styles.staysWrapper}`}>
      <div className={styles.mainStaysHeader}>
        <div className={styles.logo}>
          <img src={logoImg} alt="logo" />
        </div>
        <SearchForm onSearchStay={onSearchStay} />
      </div>
      <div>
        <div className={styles.staysHeader}>
          <h2>Stays in Finland</h2>
          <p>12+ stays</p>
        </div>

        {isLoading ? (
          <Spinner />
        ) : stays && stays.length > 0 ? (
          <div className={styles.stays}>
            {stays.map((stay) => (
              <StaysDetails key={stay.id} id={stay.id} stay={stay.data} />
            ))}
          </div>
        ) : (
          <p>There are no current stays</p>
        )}
      </div>
    </div>
  );
};

export default Stays;

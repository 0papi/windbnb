import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import StaysDetails from "../components/main/StaysDetails";
import styles from "../styles/Stays.module.css";

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
  return (
    <div className={`container ${styles.staysWrapper}`}>
      <div>
        <div className={styles.staysHeader}>
          <h2>Stays in Finland</h2>
          <p>{{ stays } - 3}+ stays</p>
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

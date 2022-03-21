import { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const StaysContext = createContext();

export const StaysProvider = ({ children }) => {
  const [stays, setStays] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // fetching data from firebase database
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
    <StaysContext.Provider value={{ stays, isLoading, onSearchStay }}>
      {children}
    </StaysContext.Provider>
  );
};

export default StaysContext;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/shared/Spinner";
import StayItem from "../components/main/StayItem";
import { toast } from "react-toastify";

import styles from "../styles/Stay.module.css";

const Stay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stay, setStay] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchStay = async () => {
      try {
        // get a reference to the collection
        const docRef = doc(db, "stays", params.stayId);
        const docSnap = await getDoc(docRef);

        // check if the snapshot of the document exists
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setStay(docSnap.data());
          setIsLoading(false);
        } else {
          toast.error("No such document was found");
        }
      } catch (error) {
        toast.error("Sorry, could not fetch details for this particular stay");
      }
    };

    fetchStay();
  }, [params.stayId]);

  return (
    <div className={`container ${styles.stayWrapper}`}>
      {isLoading ? <Spinner /> : <StayItem stay={stay} />}
    </div>
  );
};

export default Stay;

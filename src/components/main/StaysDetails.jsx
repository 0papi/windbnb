import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import styles from "../../styles/StaysDetails.module.css";

const StaysDetails = ({ stay, id }) => {
  const { photo, superHost, title, type, beds, rating, city } = stay;
  const getSuperHost = () => {
    if (superHost) {
      return (
        <div className={styles.superHost}>
          <span> Super Host</span>
          <p>{type}</p>
        </div>
      );
    } else {
      return <p>{type}</p>;
    }
  };
  return (
    <>
      <Link to={`stay/${city}/${id}`}>
        <img
          src={photo}
          alt="stay graphic"
          className={styles.staysDetails__img}
        />

        <div className={styles.staysInfoDetails}>
          <div className={styles.staysInfoDetailsTop}>
            <div className={styles.top}>
              <div className={styles.superHostWrapper}>{getSuperHost()}</div>
              <div className={styles.beds}>
                {beds > 0 ? <span>{beds} beds</span> : ""}
              </div>
            </div>
            <div className={styles.rating}>
              <AiFillStar color="#eb5757" />
              {rating}
            </div>
          </div>
          <div className={styles.staysInfoTitle}>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default StaysDetails;

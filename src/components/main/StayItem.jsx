import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import StayReview from "./StayReview";
import Badge from "../shared/Badge";
import styles from "../../styles/StayItem.module.css";
// eslint-disable-next-line
import PreviousReviews from "./PreviousReviews";

const StayItem = ({ stay }) => {
  const [showReview, setShowReview] = useState(false);
  const {
    photo,
    price,
    title,
    type,
    beds,
    rating,
    city,
    country,
    maxGuests,
    host,
  } = stay;

  const onAddReview = () => {
    setShowReview((prevState) => !prevState);
  };
  return (
    <>
      <div className={styles.stay__item}>
        <div>
          <div className={styles.stay__item__top}>
            <h2>
              {`${type}`} {beds} Breakfast and Dinner
            </h2>
            <div>
              <p>5 Review</p>
              <p className="rating">
                {" "}
                <AiFillStar color="#eb5757" /> {rating}
              </p>
              <p>
                {city} {country}
              </p>
            </div>
          </div>
          {/* stay details image */}
          <div className={styles.stay__item__mid}>
            <img
              src={photo}
              alt="details for each stay"
              className={styles.stay__item__img}
            />
          </div>

          {/* bottom of the details page */}
          <div className={styles.stay__item__text}>
            <div className={styles.stay__item__bottom}>
              <h3>
                {title} hosted by {host}
              </h3>
              <p>{maxGuests} maximum guests allowed</p>
            </div>
            {/* badge information and others */}
            <div className={styles.stay__item__info}>
              <div className={styles.price}>
                <div>
                  <Badge className={styles.stay__item__badge}>
                    ${price} / 12hrs
                  </Badge>
                </div>
                <div className={styles.stay__item__rating}>
                  <p className="rating">
                    <AiFillStar color="#eb5757" /> {rating}
                  </p>
                  <p>5 Reviews</p>
                </div>
              </div>
              <div className={styles.stay__item__actions}>
                <button className="btn" onClick={onAddReview}>
                  {!showReview ? "Create Review" : "Close Review"}
                </button>

                {showReview && <StayReview />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayItem;

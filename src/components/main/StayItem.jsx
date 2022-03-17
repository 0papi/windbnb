import { AiFillStar } from "react-icons/ai";
import styles from "../../styles/StayItem.module.css";

const StayItem = ({ stay }) => {
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
      <div className={styles.stayItem}>
        <img src={photo} alt="stay graphic" className={styles.stayItem__img} />

        <div className={styles.stayInfoDetails}>
          <div className={styles.stayInfoDetailsTop}>
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
          <div className={styles.stayInfoTitle}>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayItem;

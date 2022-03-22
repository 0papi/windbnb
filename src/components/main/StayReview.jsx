import styles from "../../styles/StayReview.module.css";

const StayReview = () => {
  const rating = [
    {
      id: 0,
      rate: 1,
    },
    {
      id: 1,
      rate: 2,
    },
    {
      id: 2,
      rate: 3,
    },
    {
      id: 3,
      rate: 4,
    },
    {
      id: 4,
      rate: 5,
    },
  ];
  return (
    <div>
      <form className={styles.review__form}>
        <div className={styles.input}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Add title of review" />
        </div>

        <div className={styles.input}>
          <label htmlFor="Rating">Rating</label>
          <div className={styles.input__rating}>
            {rating.map((rate) => (
              <span key={rate.id}>{rate.rate}</span>
            ))}
          </div>
        </div>

        <div className={styles.input}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>

        <button type="submit" className="btn" style={{ marginTop: "1rem" }}>
          Add Review
        </button>
      </form>
    </div>
  );
};

export default StayReview;

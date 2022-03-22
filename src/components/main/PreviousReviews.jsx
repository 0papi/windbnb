import { AiFillStar } from "react-icons/ai";

const PreviousReviews = (props) => {
  return (
    <>
      {props.reviews.map((review) => (
        <div>
          <div>
            <p>{review.title}</p>
            <p>
              {" "}
              <AiFillStar color="#eb5757" />
              {review.rating}
            </p>
          </div>

          <div>
            <p>{review.message}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PreviousReviews;

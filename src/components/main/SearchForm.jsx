import { useState } from "react";

import { BiSearchAlt2 } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Modal from "../shared/Modal";
import styles from "../../styles/SearchForm.module.css";
import classes from "../../styles/Modal.module.css";

const SearchForm = (props) => {
  const locationData = [
    {
      id: 1,
      location: "Helsinki",
    },
    {
      id: 2,
      location: "Oulu",
    },
    {
      id: 3,
      location: "Turku",
    },
    {
      id: 4,
      location: "Vaasa",
    },
  ];
  const [button, setButton] = useState(false);
  const [locationInput, setLocationInput] = useState("Add Location");
  const [guestInput, setGuestInput] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showGuestModal, setGuestModal] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const onShowModal = () => {
    setShowModal((prevShow) => !prevShow);
    setGuestModal(false);
  };

  const onShowGuestModal = () => {
    setGuestModal((prevState) => !prevState);
    setShowModal(false);
  };

  const onExtendButton = () => {
    setButton((prevState) => !prevState);
  };

  const incrementChild = () => {
    setChildCount(childCount + 1);
    setGuestInput(guestInput + 1);
  };
  const incrementAdult = () => {
    setGuestInput(guestInput + 1);
    setAdultCount(adultCount + 1);
  };

  const decrementChild = () => {
    setChildCount(childCount - 1);
    setGuestInput(guestInput - 1);
    if (guestInput <= 0) {
      setGuestInput(0);
    }

    if (childCount <= 0) {
      setChildCount(0);
    }
  };

  const decrementAdult = () => {
    setAdultCount(adultCount - 1);
    setGuestInput(guestInput - 1);
    if (guestInput <= 0) {
      setGuestInput(0);
    }
    if (adultCount <= 0) {
      setAdultCount(0);
    }
  };

  const findLocation = (locationId) => {
    const locationIndex = locationData.findIndex(
      (locationItem) => locationItem.id === locationId
    );

    const locationFound = locationData[locationIndex];
    console.log(locationFound);
    setLocationInput(locationFound.location);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const queryData = {
      location: locationInput,
      guest: guestInput,
    };

    props.onSearchStay(queryData);
  };
  return (
    <div>
      <div className={styles.searchFormWrapper}>
        <form onSubmit={onFormSubmit} className={styles.form}>
          {/* location input part of the search input for changing location to what the user prefers. Utilizes a modal to show the other location options */}
          <div>
            <div className={styles.formInput} onClick={onShowModal}>
              <label>Location</label>
              <input type="text" value={locationInput} />
            </div>
            {showModal && (
              <Modal className="locationModal">
                <ul>
                  {locationData.map((location) => (
                    <li
                      key={location.id}
                      className={styles.locationData}
                      onClick={() => findLocation(location.id)}
                    >
                      <p>
                        <FaMapMarkerAlt />
                      </p>
                      <p>{location.location} Finland</p>
                    </li>
                  ))}
                </ul>
              </Modal>
            )}
          </div>
          {/* guests input */}
          <div>
            <div className={styles.formInput} onClick={onShowGuestModal}>
              <label>Guests</label>
              <input
                type="text"
                value={`${guestInput} ${guestInput > 1 ? "guests" : "guest"}`}
                placeholder="Add guests"
              />
            </div>
            {showGuestModal && (
              <Modal className={classes.guestModal}>
                <div className="guestModal__alt guestModal__adults">
                  <div className="guestModal__alt__info">
                    <p>Adults</p>
                    <span>Ages 13 or above</span>
                  </div>
                  <div className="guestModal__rating">
                    <div className="rate" onClick={decrementAdult}>
                      -
                    </div>
                    <div className="zero__rate">{adultCount}</div>
                    <div className="rate" onClick={incrementAdult}>
                      +
                    </div>
                  </div>
                </div>
                <div className="guestModal__alt">
                  <div className="guestModal__alt__info">
                    <p>Children</p>
                    <span>Ages 2 - 12</span>
                  </div>
                  <div className="guestModal__rating">
                    <div className="rate" onClick={decrementChild}>
                      -
                    </div>
                    <div className="zero__rate">{childCount}</div>
                    <div className="rate" onClick={incrementChild}>
                      +
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </div>

          {/* search form button for submitting form data for filtering stays in the main stays component */}
          <button
            type="submit"
            className={button ? `${styles.form__btn}` : `${styles.icon__btn}`}
            onClick={onExtendButton}
          >
            {button ? (
              <div className={styles.mainForm}>
                <BiSearchAlt2 className={styles.form__btn__icon} />
                <p>Search</p>
              </div>
            ) : (
              <BiSearchAlt2 className={styles.form__btn__icon} />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

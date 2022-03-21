import { useContext } from "react";
import { Link } from "react-router-dom";
import StaysContext from "../context/StaysContext";
import Spinner from "../components/shared/Spinner";
import StaysDetails from "../components/main/StaysDetails";
import SearchForm from "../components/main/SearchForm";
import styles from "../styles/Stays.module.css";
import logoImg from "../assets/logo.svg";

const Stays = () => {
  const { stays, isLoading } = useContext(StaysContext);

  return (
    <div className={`container ${styles.staysWrapper}`}>
      <div className={styles.mainStaysHeader}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <SearchForm />
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

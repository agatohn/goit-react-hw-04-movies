import { NavLink, useLocation } from "react-router-dom";
import styles from "../../views/Styles.module.css";

export default function DetailsNavigation({ movieId }) {
  const location = useLocation();
  return (
    <ul>
      <li>
        <NavLink
          to={{
            pathname: `/movies/${movieId}/cast`,
            state: {
              from: location.state?.from ?? "/",
            },
          }}
          activeClassName={styles.activeLink}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: `/movies/${movieId}/reviews`,
            state: {
              from: location.state?.from ?? "/",
            },
          }}
          activeClassName={styles.activeLink}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}

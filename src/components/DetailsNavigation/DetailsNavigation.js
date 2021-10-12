import { NavLink } from "react-router-dom";
import styles from "../../views/Styles.module.css";

export default function DetailsNavigation({ movieId }) {
  return (
    <ul>
      <li>
        <NavLink
          to={{
            pathname: `/movies/${movieId}/cast`,
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
          }}
          activeClassName={styles.activeLink}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}

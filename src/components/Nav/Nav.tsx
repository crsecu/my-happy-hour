import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";

interface NavProps {}

function Nav(props: NavProps): React.JSX.Element {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

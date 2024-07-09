import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./Layout.module.css";

function Layout(): React.JSX.Element {
  return (
    <div className={styles.layout}>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;

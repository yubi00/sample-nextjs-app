import { Fragment } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Meta />
      <Nav />
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;

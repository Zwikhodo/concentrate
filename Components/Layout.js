import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Layout;

import styles from "../styles/base.module.css";
import Auth from "./auth";
import Home from "./home";
import Profile from "./profile";

const Base = () => {
  return (
    <div className={styles.base}>
      <div
        className={styles.backfade}
        style={{ top: "-18%", right: "0" }}
      ></div>
      <div
        className={styles.backfade}
        style={{ top: "36%", left: "-8rem" }}
      ></div>
      <Profile />
      {/* <Auth /> */}
      {/* <Home /> */}
    </div>
  );
};

export default Base;

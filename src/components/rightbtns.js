import styles from "../styles/rightsidebtns.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGear,
  faBell,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const Rightbtns = () => {
  return (
    <div className={styles.rightbtns}>
      <FontAwesomeIcon
        icon={faHouse}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
      <FontAwesomeIcon
        icon={faGear}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
      <FontAwesomeIcon
        icon={faBell}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
      <FontAwesomeIcon
        icon={faMessage}
        width={25}
        style={{ color: "var(--location)", fontSize: "2em" }}
      />
    </div>
  );
};

export default Rightbtns;

import React from "react";
import styles from "../styles/profileinfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Profileinfo = () => {
  return (
    <div className={styles.profileinfo}>
      <div className={styles.info}>
        <h1>Profile Info</h1>
        <FontAwesomeIcon icon={faPenToSquare} size="2x" />
      </div>
      <div className={styles.infodata}>
        <h2>Status &nbsp; &nbsp; :</h2>
        <h2>Living at :</h2>
        <h2>Work at &nbsp; :</h2>
        <h2>Country &nbsp;:</h2>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Profileinfo;

import React from "react";
import styles from "../styles/profilecard.module.css";
import Image from "next/image";
import { cover, profile } from "../../public/Images";

const Profilecard = ({ location }) => {
  console.log(location);
  return (
    <div className={styles.profilecard}>
      <div className={styles.proimages}>
        <Image
          src={cover}
          width="35rem"
          layout="responsive"
          className={styles.coverimg}
        ></Image>
        <Image
          src={profile}
          className={styles.proimg}
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            position: "absolute",
          }}
        ></Image>
      </div>
      <div className={styles.proinfo}>
        <h3>Bhavin Goswami</h3>
        <h3>Write about your self</h3>
      </div>
      <div className={styles.follow}>
        <div className={styles.followersinfo}>
          <h3>0</h3>
          <h3>followers</h3>
        </div>
        <div style={{ borderLeft: "1px solid var(--hrColor)" }}></div>
        <div className={styles.followersinfo}>
          <h3>0</h3>
          <h3>followers</h3>
        </div>
      </div>
      <h3
        style={{
          color: "var(--orange)",
          wordSpacing: "2px",
          letterSpacing: "1.5px",
          display: location ? "none" : "flex",
        }}
      >
        My Profile
      </h3>
    </div>
  );
};

export default Profilecard;

import React from "react";
import styles from "../styles/findfriend.module.css";
import Image from "next/image";
import { profile } from "../../public/Images";

const Findfriend = () => {
  return (
    <div className={styles.findfriend}>
      <h3>People you may know</h3>
      <div className={styles.friendinfo}>
        <Image
          src={profile}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        ></Image>
        <div className={styles.nameinfo}>
          <h4>Bhavin gusai</h4>
          <h4>gusaibhavin88@gnmaul.com</h4>
        </div>
        <button>Follow</button>
      </div>
      <div className={styles.friendinfo}>
        <Image
          src={profile}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        ></Image>
        <div className={styles.nameinfo}>
          <h4>Bhavin gusai</h4>
          <h4>gusaibhavin88@gnmaul.com</h4>
        </div>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default Findfriend;

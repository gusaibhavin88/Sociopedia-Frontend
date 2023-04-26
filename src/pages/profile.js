import React from "react";
import styles from "../styles/profile.module.css";
import Searchbar from "@/components/searchbar";
import Profileleft from "@/components/profileleft";
import Profilecard from "@/components/profilecard";
import Postprofile from "@/components/postprofile";
import Rightside from "./rightside";
const Profile = () => {
  return (
    <div className={styles.profile}>
      <Profileleft />
      <Postprofile />
      <Rightside />
    </div>
  );
};

export default Profile;

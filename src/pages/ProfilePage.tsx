import React from "react";
import Pane from "../ui/Pane";
import style from "./ProfilePage.module.scss";
import profile from "../assets/image/profile.png";
import Card from "../ui/Card";
import Profile from "../components/Profile";
const ProfilePage = () => {
  return (
    <Pane className={style.profile_container}>
      <>
        <div className={style.profile__left_container}>
          <img
            src={profile}
            alt="Profile pictures"
            width="260px"
            height="209px"
          />
        </div>
        <Card className={style.profile__right_container}>
          <Profile />
        </Card>
      </>
    </Pane>
  );
};

export default ProfilePage;

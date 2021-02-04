import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        {/* <img
          src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          alt=""
        /> */}
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;

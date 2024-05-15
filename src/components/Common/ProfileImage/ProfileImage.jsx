import React from "react";
import styles from "./ProfileImage.module.css"

export function ProfileImage({url}){
    return (
        <div  className={styles.box}>
            <img className={styles.logo} src={url} alt="profile-img"/>
        </div>
    );
}

export default ProfileImage;
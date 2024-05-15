import React from "react";
import styles from "./Profile.module.css"
import { SmallTitle } from "../../TextComponents"
import { ProfileImage } from "../../Common";

export function Profile({name, url}){
    return ( <article className={styles.textDetail}>
    <ProfileImage url={url}/>
    <div className={styles.writerDetail}>
    <SmallTitle text={name}/>
    </div>
    </article>);
}

export default Profile;
import React from "react";
import backIcon from "../../../assets/icons/back.png";
import styles from "./Back.module.css"

function Back({ url }) {
    const handleClick = () => {
        window.location.href = url;
    };
    return <img className={styles.back} src={backIcon} alt="back icon" onClick={handleClick} />;
}

export default Back;
import React from "react";
import styles from "./SmallButton.module.css"

export function SmallButton({text, isPurple}){
    return <button className={`${styles.smallButton} ${isPurple? styles.purple : styles.black }`}>{text}</button>;
}

export default SmallButton;
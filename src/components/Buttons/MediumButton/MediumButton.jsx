import React from "react";
import styles from "./MediumButton.module.css"

export function MediumButton({text}){
    return <button className={styles.mediumButton}>{text}</button>;
}

export default MediumButton;
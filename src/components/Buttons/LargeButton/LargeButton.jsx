import React from "react";
import styles from "./LargeButton.module.css"

export function LargeButton({text}){
    return <button className={styles.largeButton}>{text}</button>;
}

export default LargeButton;
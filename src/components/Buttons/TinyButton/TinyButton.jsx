import React from "react";
import styles from "./TinyButton.module.css"

export function TinyButton({text}){
    return <button className={styles.tinyButton}>{text}</button>;
}

export default TinyButton;
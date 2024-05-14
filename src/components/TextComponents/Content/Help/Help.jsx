import React from "react";
import styles from "./Help.module.css"

export function Help({text}){
    return <h6 className={styles.help}>{text}</h6>;
}

export default Help;
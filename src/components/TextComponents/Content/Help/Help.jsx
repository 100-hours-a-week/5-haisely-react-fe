import React from "react";
import styles from "./Link.module.css"

export function Link({text}){
    return <h6 className={styles.link}>{text}</h6>;
}

export default Link;
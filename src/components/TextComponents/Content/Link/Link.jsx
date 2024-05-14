import React from "react";
import styles from "./Link.module.css"

export function Link({text}){
    return <a className={styles.link}>{text}</a>;
}

export default Link;
import React from "react";
import styles from "./Link.module.css"

export function Link({text, link}){
    return <a className={styles.link} href={link}>{text}</a>;
}

export default Link;
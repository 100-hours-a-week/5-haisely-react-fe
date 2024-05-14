import React from "react";
import styles from "./Content.module.css"

export function Content({text}){
    return <h4 className={styles.content}>{text}</h4>;
}

export default Content;
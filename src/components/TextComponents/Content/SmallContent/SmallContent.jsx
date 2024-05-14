import React from "react";
import styles from "./Content.module.css"

export function SmallContent({text}){
    return <h5 className={styles.smallContent}>{text}</h5>;
}

export default SmallContent;
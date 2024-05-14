import React from "react";
import styles from "./SmallContent.module.css"

export function SmallContent({text}){
    return <h5 className={styles.smallContent}>{text}</h5>;
}

export default SmallContent;
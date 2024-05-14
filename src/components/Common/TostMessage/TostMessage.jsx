import React from "react";
import styles from "./TostMessage.module.css"

export function TostMessage({text}){
    return <div className={styles.tostMessage}>{text}</div>;
}

export default TostMessage;
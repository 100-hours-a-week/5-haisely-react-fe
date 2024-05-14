import React from "react";
import styles from './SmallTitle.module.css';

export function SmallTitle({ text }) {
    return <h3 className={styles.smallTitle}>{text}</h3>;
}

export default SmallTitle;
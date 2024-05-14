import React from "react";
import styles from './MediumTitle.module.css';

export function MediumTitle({ text }) {
    return <h2 className={styles.mediumTitle}>{text}</h2>;
}

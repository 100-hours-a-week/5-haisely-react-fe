import React from "react";
import styles from './LargeTitle.module.css';

export function LargeTitle({ text }) {
    return <h1 className={styles.largeTitle}>{text}</h1>;
}

export default LargeTitle;
import React from "react";
import styles from "./BoardInfo.module.css"
import {SmallTitle} from "../../TextComponents"

export function BoardInfo({text, num}){
    return (<article className={styles.info}>
            <p className={styles.num}>{num}</p>
            <SmallTitle text={text}/>
        </article>);
}

export default BoardInfo;
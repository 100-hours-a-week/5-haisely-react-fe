import React from "react";
import styles from "./Board.module.css"
import {Content, MediumTitle} from "../../TextComponents"
import {Profile} from "../Profile/Profile"

export function Board({title, commentNum, date, viewNum, profileUrl, nickname}){
    return (  <article className={styles.unit}>
    <article className={styles.content}>
        <MediumTitle text={title}></MediumTitle>
        <div className={styles.detail}>
            <Content text={`댓글 ${commentNum}  조회수 ${viewNum}`}></Content>
            <Content text={date}></Content>
        </div>  
    </article>
    <hr className={styles.horizontalRule}/>
    <div className={styles.writer}>
    <Profile url={profileUrl} name={nickname}></Profile>
    </div>
</article>);
}

export default Board;
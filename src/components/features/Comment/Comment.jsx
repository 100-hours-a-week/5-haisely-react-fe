import React from "react";
import styles from "./Comment.module.css"
import { SmallContent, Content } from "../../TextComponents"
import { TinyButton } from "../../Buttons";
import {Profile} from "../Profile/Profile"

export function Comment({profileUrl, name, date, content}){
    return ( <article className={styles.comment}>
    <article className={styles.detail}>
        <div className={styles.textDetail}>
            <Profile name={name} url={profileUrl}></Profile>
            <SmallContent text={date}></SmallContent>
        </div>
        <div className={styles.smallButtons}>
            <TinyButton text="수정"></TinyButton>
            <TinyButton text="삭제"></TinyButton>
        </div>
    </article>
    <Content text={content}></Content>
    </article>);
}

export default Comment;
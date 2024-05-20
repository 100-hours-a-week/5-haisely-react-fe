import React from "react";
import styles from "./Modal.module.css"
import { MediumTitle, Content } from "../../TextComponents"
import { SmallButton } from "../../Buttons";

export function Modal({text}){
    return ( <article className={styles.modal}>
    <MediumTitle text={text}></MediumTitle>
    <p>삭제한 내용은 복구 할 수 없습니다.</p>
    <div className={styles.buttons}>
        <SmallButton text="취소" isPurple={true}></SmallButton>
        <SmallButton text="확인"></SmallButton>
    </div>
</article>);
}

export default Modal;
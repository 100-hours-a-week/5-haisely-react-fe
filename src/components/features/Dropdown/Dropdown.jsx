import React from "react";
import styles from "./Dropdown.module.css"
import { Link } from "../../TextComponents"
import {ProfileImage} from "../../Common"

export function Dropdown({profileUrl}){
    return ( <article className={styles.dropdown}>
        <ProfileImage url={profileUrl}></ProfileImage>
        <div className={styles.dropdownContent}>
            <Link text="회원정보수정" link="/users/edit"></Link>
            <Link text="비밀번호수정" link="/users/edit/password"></Link>
            <Link text="로그아웃"></Link>
        </div>           
    </article>);
}

export default Dropdown;
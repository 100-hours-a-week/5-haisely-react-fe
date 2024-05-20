import React from "react";
import styles from "./TextForm.module.css"
import { Help, SmallTitle } from "../../TextComponents"

export function TextForm({text, name, type, placeholder, helpText}){
    return ( <div className={styles.form}>
        <label for={name}><SmallTitle text={text}/></label>
            <input type={type} name={name} placeholder={placeholder}/>
            <Help text={helpText}/>
    </div>);
}

export default TextForm;
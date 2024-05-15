import React from "react";
import styles from "./TextForm.module.css"
import { Help, SmallTitle } from "../../TextComponents"

export function TextForm({name, type, placeholder, helpText}){
    return ( <div>
        <label for={name}><SmallTitle text={name}/></label>
            <input type={type} name={name} placeholder={placeholder}/>
            <Help text={helpText}/>
    </div>);
}

export default TextForm;
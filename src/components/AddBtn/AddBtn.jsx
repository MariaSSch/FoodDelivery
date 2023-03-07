import React from 'react';
import cross from "../../assets/cross.svg";
import s from "./AddBtn.module.sass";

export default function AddBtn({...props}) {
  return (
    <button className={s.addBtn} {...props}>
      <img src={cross} alt="cross"/>
    </button>

    
  )
}

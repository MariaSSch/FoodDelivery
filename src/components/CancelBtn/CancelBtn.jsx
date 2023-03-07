import React from 'react';
import x_cross from "../../assets/x-cross.svg";
import s from "./CancelBtn.module.sass";

export default function AddBtn({...props}) {
  return (
    <button className={s.cancelBtn} {...props}>
      <img src={x_cross} alt="cross"/>
    </button>

    
  )
}

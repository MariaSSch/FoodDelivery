import React from 'react';
import s from "./AddCancelBtn.module.sass";

export default function AddCancelBtn({...props}) {
  return (
    <button className={s.addCancelBtn} {...props}>&#43;</button>

    
  )
}

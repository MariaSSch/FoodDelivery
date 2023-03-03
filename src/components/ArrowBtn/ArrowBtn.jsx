import React from 'react';
import s from "./ArrowBtn.module.sass";
import arrow from "../../assets/backarrow.png";


export default function ArrowBtn({...props}) {
  return (
    <button 
        className={s.cartBackArrow} 
        style={{backgroundImage: `url(${arrow})`}}
        {...props}></button>

  )
}

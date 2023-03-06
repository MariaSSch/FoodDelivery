import React from 'react';
import { useNavigate } from "react-router-dom";
import s from "./ArrowBtn.module.sass";
import arrow from "../../assets/backarrow.png";


export default function ArrowBtn({...props}) {
  const navigate = useNavigate();
  return (
    <button 
        className={s.cartBackArrow} 
        style={{backgroundImage: `url(${arrow})`}}
        onClick={() => navigate(-1)}
        {...props}></button>

  )
}

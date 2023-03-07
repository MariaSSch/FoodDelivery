import React from 'react';
import { useNavigate } from "react-router-dom";
import s from "./ArrowBtn.module.sass";
import arrow from "../../assets/backarrow.svg";


export default function ArrowBtn({...props}) {
  const navigate = useNavigate();
  return (
    <button 
        className={s.backArrow} 
        onClick={() => navigate(-1)}
        {...props}><img src={arrow} alt="backarrow"/></button>

  )
}

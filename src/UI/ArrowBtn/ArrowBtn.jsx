import React from 'react';
import { useNavigate } from "react-router-dom";
import s from "./ArrowBtn.module.sass";
import {ReactComponent as Arrow} from "../../assets/backarrow.svg";


export default function ArrowBtn({...props}) {
  const navigate = useNavigate();
  return (
    <button 
        className={s.backArrow} 
        onClick={() => navigate(-1)}
        {...props}><Arrow className={s.arrow}/></button>

  )
}

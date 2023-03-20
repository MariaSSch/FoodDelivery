import React from 'react';
import x_cross from "../../assets/x-cross.svg";
import s from "./DeleteBtn.module.sass";

export default function AddBtn({id, handleDelete}) {

   

  return (
    <button className={s.deleteBtn} onClick={()=>handleDelete(id)}>
      <img src={x_cross} alt="cross"/>
    </button>

    
  )
}

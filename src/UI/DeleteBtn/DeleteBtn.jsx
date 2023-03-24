import React from 'react';
import { ReactComponent as Xcross} from "../../assets/x-cross.svg";
import s from "./DeleteBtn.module.sass";

export default function AddBtn({id, handleDelete}) {

   

  return (
    <button className={s.deleteBtn} onClick={()=>handleDelete(id)}>
      <Xcross className={s.deleteBtnCross}/>
    </button>

    
  )
}

import React from 'react';

import s from "./CountElem.module.sass";

export default function CountElem({handleChangeCount, handleIncr, handleDecr, count, id}) {
  return (
    <form className={s.count} onSubmit={(e)=>e.preventDefault()}>
        <input onChange={(e)=>handleChangeCount(id, +e.target.value)} value={count} />
        <div className={s.countChange}>
            <p onClick={()=>handleIncr(id)}>&#9650;</p>
            <p onClick={()=>handleDecr(id)}>&#9660;</p>
        </div>
    </form>
  )
}

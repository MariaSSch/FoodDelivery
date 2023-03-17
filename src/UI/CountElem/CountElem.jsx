import React from 'react';

import s from "./CountElem.module.sass";

export default function CountElem() {
  return (
    <div className={s.count}>
        <input value={1} />
        <div className={s.countChange}>
            <p>&#9650;</p>
            <p>&#9660;</p>
        </div>
    </div>
  )
}

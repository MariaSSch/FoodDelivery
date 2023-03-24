import React from 'react';
import s from "./Modal.module.sass";

export default function Modal({closemodal, children}) {
  return (
    <div className={s.modalContainer} onClick={closemodal}>
        <div className={s.modal} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

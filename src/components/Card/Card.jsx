import React from 'react';
import s from "./Card.module.sass";

export default function Card({src, title, description, price, output, ...props}) {
  return (
    <div className={s.card}>
        <img src={src} alt="foto"/>
        <p className={s.cardTitle}>{title}</p>
        <p className={s.cardDescr}>{description}</p>
        <div className={s.cardFooter}>
          <div>
            <p className={s.cardPrice}>{price} &#8381;</p>
            <p className={s.cardOutput}>/ {output}</p>
          </div>
          <button className={s.cardAddBtn} {...props}>&#43;</button>
        </div>
    </div>
  )
}

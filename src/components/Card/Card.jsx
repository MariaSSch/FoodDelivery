import React from 'react';
import AddBtn from '../AddBtn/AddBtn';
import s from "./Card.module.sass";

export default function Card({src, title, description, price, output}) {
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
          <AddBtn />       
        </div>
    </div>
  )
}

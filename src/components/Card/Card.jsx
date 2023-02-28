import React from 'react';
import s from "./Card.module.sass";

export default function Card({src, title, description, price, output}) {
  return (
    <div>
        <img src={src} alt="foto"/>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>
        <p className={s.price}>{price}</p>
        <p className={s.output}>{output}</p>
    </div>
  )
}

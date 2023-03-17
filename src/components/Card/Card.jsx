import React from 'react';
import AddBtn from '../../UI/AddBtn/AddBtn';
import s from "./Card.module.sass";

export default function Card({prod, handleClick}) {

 
  return (
    <div className={s.card}>
        <img className={s.cardImg} src={process.env.PUBLIC_URL+prod.image} alt="foto"/>
        <p className={s.cardTitle} lang="ru" onClick={handleClick}>
          {prod.title}
        </p>
        <p className={s.cardDescr}>
          {prod.description}
        </p>
        <div className={s.cardFooter}>
          <div>
            <p className={s.cardPrice}>
              {prod.price} &#8381;
            </p>
            <p className={s.cardOutput}>
              / {prod.output}
            </p>
          </div>
          <AddBtn prod={prod}/>       
        </div>
    </div>
  )
}

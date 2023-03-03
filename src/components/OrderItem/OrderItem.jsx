import React from 'react';
import AddCancelBtn from '../AddCancelBtn/AddCancelBtn';

import s from "./Order.module.sass";

export default function OrderItem({src, title, price}) {
  return (
    <div className={s.cartOrderItem}>
        <div className={s.cartProdData}>
            <div className={s.cartImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + src})`}}></div>
            {/* <img src={src} alt="foto" className={s.cartImg}/> */}
            <p className={s.cardTitle}>{title}</p>
        </div>
        <div className={s.cartPriceData}>
            <p className={s.cardPrice}>{price}  &#8381;</p>
            <AddCancelBtn />
        </div>
    </div>
  )
}

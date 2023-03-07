import React from 'react';
import CancelBtn from '../CancelBtn/CancelBtn';

import s from "./Order.module.sass";

export default function OrderItem({src, title, price}) {
  return (
    <div className={s.orderItem}>
        <div className={s.orderData}>
            <div className={s.orderImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + src})`}}></div>
            <p className={s.orderTitle}>{title}</p>
        </div>
        <div className={s.orderPriceData}>
            <p className={s.orderPrice}>{price}  &#8381;</p>
            <CancelBtn />
        </div>
    </div>
  )
}

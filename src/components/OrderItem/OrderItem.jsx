import React from 'react';
import CountElem from '../../UI/CountElem/CountElem';
import DeleteBtn from '../../UI/DeleteBtn/DeleteBtn';

import s from "./Order.module.sass";

export default function OrderItem({prod}) {


  return (
    <div className={s.orderItem}>
        <div className={s.orderData}>
            <div className={s.orderImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + prod.image})`}}></div>
            <p className={s.orderTitle}>
              {prod.title}
            </p>
        </div>
        <CountElem />
        <div className={s.orderPriceData}>
            <p className={s.orderPrice}>
              {prod.price}  &#8381;
            </p>
            <DeleteBtn prod={prod}/>
        </div>
    </div>
  )
}

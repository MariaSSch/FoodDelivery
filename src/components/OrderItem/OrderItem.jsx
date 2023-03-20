import React from 'react';
import { useDispatch } from 'react-redux';
import { changeProd, decrProd, incrProd, delFromCart } from '../../store/cartReducer';
import CountElem from '../../UI/CountElem/CountElem';
import DeleteBtn from '../../UI/DeleteBtn/DeleteBtn';

import s from "./Order.module.sass";

export default function OrderItem({prod}) {

  const dispatch = useDispatch();
  const handleChangeCount = (id, value) => {
    dispatch(changeProd(id, value))
  }
  const handleIncr = (id) => {
    dispatch(incrProd(id));
  }
  const handleDecr = (id) => {
    dispatch(decrProd(id));
  }

  const handleDelete = (id) => {
    dispatch(delFromCart(id))
  }
  return (
    <div className={s.orderItem}>
        <div className={s.orderData}>
            <div className={s.orderImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + prod.image})`}}></div>
            <p className={s.orderTitle}>
              {prod.title}
            </p>
        </div>
        <CountElem handleChangeCount={handleChangeCount} 
                  handleIncr={handleIncr} 
                  handleDecr={handleDecr}
                  count={prod.count}
                  id={prod.id}/>
        <div className={s.orderPriceData}>
            <p className={s.orderPrice}>
              {prod.currPrice}  &#8381;
            </p>
            <DeleteBtn id={prod.id} handleDelete={handleDelete}/>
        </div>
    </div>
  )
}

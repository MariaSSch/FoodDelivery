import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Cartsign} from "./../../assets/cart.svg"
import s from "./Cart.module.sass";

export default function Cart() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  }
  
  const {prodsCounter, subtotal} = useSelector(({cart}) => ({
    prodsCounter: cart.prodsCounter,
    subtotal: cart.subtotal,
  }))
  
  return (
    <div className={s.cart}>
        <div className={s.cartInfo}>
            <p>{prodsCounter.length} товара</p>
            <p>на сумму {subtotal} &#8381;</p>
        </div>
        <div className={s.cartSignContainer}>
          <Cartsign className={s.cartSign} onClick={handleClick}/>
        </div>
    </div>
  )
}

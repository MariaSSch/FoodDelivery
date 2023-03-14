import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cart from "./../../assets/cart.svg"
import s from "./Cart.module.sass";

export default function Cart() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/cart");
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
        <div className={s.cartSign}>
          <img src={cart} alt="cart" onClick={handleClick}/>
        </div>
    </div>
  )
}

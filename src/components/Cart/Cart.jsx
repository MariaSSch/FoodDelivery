import React from 'react';
import cart from "./../../assets/cart.svg"
import s from "./Cart.module.sass";

export default function Cart() {
  return (
    <div className={s.cart}>
        <div className={s.cartInfo}>
            <p>3 товара</p>
            <p>на сумму 3500 &#8381;</p>
        </div>
        <div className={s.cartSign}>
            <img src={cart} alt="cart" />
        </div>
    </div>
  )
}

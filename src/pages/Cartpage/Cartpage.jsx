import React from 'react';
import { useSelector } from 'react-redux';
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Button from '../../UI/Button/Button';
import OrderItem from '../../components/OrderItem/OrderItem';

import s from "./Cartpage.module.sass"


export default function Cartpage() {

    const {prodsCounter, subtotal} = useSelector(({cart}) => ({
        prodsCounter: cart.prodsCounter,
        subtotal: cart.subtotal,
    }))

    const handleCompleteOrder = () => {
        let prodsList = "";
        prodsCounter.map(elem => prodsList += elem.title + ", " + " " + elem.count + "шт.; ");
        const prodsInOrder = prodsCounter.reduce((prev, prod) => prev + prod.count, 0);
        console.log("Всего товаров в заказе: ", prodsInOrder, "на сумму: ", subtotal, "Список товаров: ", prodsList)
    }

  return (
    <div className={s.cartpage}>
        <div className={s.cartpageHeader}>
            <ArrowBtn />
            {(document.body.clientWidth >= 495) ? 
            <h1>Корзина с выбранными товарами</h1> : 
            <h1>Выбранные товары</h1>}
            <div  className={s.getoutBtn}><GetoutButton/></div>
        </div>

        {
        prodsCounter.length === 0 ? <p className={s.cartpageEmpty}>Ваша корзина пуста</p> :
        <>
            <div className={s.cartpageContent}>
                {
                    prodsCounter.map(prod=>{
                        return <OrderItem key={prod.id} prod={prod}/>
                        
                    })
                }
            </div>

            <div className={s.cartpageFooter}>
                <div className={s.cartpageTotal}>
                    <p className={s.cartpageTotalText}>заказ на сумму: </p>
                    <p className={s.cartpageTotalPrice}>{subtotal}  &#8381;</p>
                </div>
                <Button children="Оформить заказ" onClick={handleCompleteOrder}/>
            </div>
        </>
        }

    </div>
  )
}

import React from 'react';
import Button from '../../components/Button/Button';
import OrderItem from '../../components/OrderItem/OrderItem';

import s from "./Cartpage.module.sass"
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getOutUser } from '../../store/authReducer';
import { useNavigate } from 'react-router-dom';


export default function Cartpage() {

    const {prodsCounter, subtotal} = useSelector(({cart}) => ({
        prodsCounter: cart.prodsCounter,
        subtotal: cart.subtotal,
    }))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGetout = () => {
        dispatch(getOutUser());
        navigate("/app");
      }

    const handleCompleteOrder = () => {
        let prodsList = "";
        prodsCounter.map(elem => prodsList += elem.title + ", ")
        console.log("Всего товаров в заказе: ", prodsCounter.length, "на сумму: ", subtotal, "Список товаров: ", prodsList)
    }

  return (
    <div className={s.cartpage}>
        <div className={s.cartpageHeader}>
            <ArrowBtn />
            <h1>Корзина с выбранными товарами</h1>
            <Button children="Выйти" onClick={handleGetout}/>
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

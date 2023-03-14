import React from 'react';
import Button from '../../components/Button/Button';
import OrderItem from '../../components/OrderItem/OrderItem';

import s from "./Cartpage.module.sass"
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import { useSelector } from 'react-redux';

export default function Cartpage() {

    // const prods = [
    //     { "id": 1, "title": "Устрицы по рокфеллеровски", "description": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры", "price": 2700, "output":" 500 г.", "image": "/foodImages/1.png" },
    //     { "id": 2, "title": "Свиные ребрышки на гриле с зеленью", "description": "Не следует, однако забывать, что реализация намеченных плановых", "price": 1600, "output":" 750 г.", "image": "/foodImages/2.png" },
    //     { "id": 3, "title": "Креветки по-королевски в лимонном соке", "description": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу", "price": 1820, "output":" 7 шт.", "image": "/foodImages/3.png" },
    //     { "id": 4, "title": "Жареный хлеб с устрицами и овощами", "description": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры", "price": 2700, "output":" 500 г.", "image": "/foodImages/1.png" },
  
    // ];
    const {prodsCounter, subtotal} = useSelector(({cart}) => ({
        prodsCounter: cart.prodsCounter,
        subtotal: cart.subtotal,
    }))


  return (
    <div className={s.cartpage}>
        <div className={s.cartpageHeader}>
            <ArrowBtn />
            <h1>Корзина с выбранными товарами</h1>
            <Button children="Выйти"/>
        </div>

        {
        prodsCounter.length === 0 ? <p className={s.cartpageEmpty}>Ваша корзина пуста</p> :
            <div className={s.cartpageContent}>
                {
                    prodsCounter.map(prod=>{
                        return <OrderItem key={prod.id} prod={prod}/>
                        
                    })
                }
            </div>
        }

        <div className={s.cartpageFooter}>
            <div className={s.cartpageTotal}>
                <p className={s.cartpageTotalText}>заказ на сумму: </p>
                <p className={s.cartpageTotalPrice}>{subtotal}  &#8381;</p>
            </div>
            <Button children="Оформить заказ"/>
        </div>
    </div>
  )
}

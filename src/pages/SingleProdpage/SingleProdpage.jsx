import React from 'react';
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import Button from '../../components/Button/Button';
import Cart from '../../components/Cart/Cart';
import s from "./SingleProd.module.sass";

export default function SingleProdpage() {
    const prods = [
        { "id": 1, 
        "title": "Устрицы по рокфеллеровски", 
        "description": "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры", 
        "fullDescr": "Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.",
        "price": 2700, 
        "output":" 500 г.", 
        "image": "/foodImages/1.png" },
    ];

  return (
    <div className={s.singlepage}>
        <div className={s.singlepageHeader}>
            <ArrowBtn />
            <div>
                <Cart />
                <Button children="Выйти"/>
            </div>
        </div>
        <div className={s.singlepageItem}>
            <div className={s.singlepageImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + prods[0].image})`}}></div>
            <div className={s.singlepageInfo}>
                <div className={s.singlepageTitle}>{prods[0].title}</div>
                <div className={s.singlepageFullDescr}>{prods[0].fullDescr}{prods[0].fullDescr}</div>
                <div className={s.singlepageOrder}>
                    <div>
                        <div className={s.singlepagePrice}>{prods[0].price}  &#8381;</div>
                        <div className={s.singlepageOutput}> / {prods[0].output}</div>
                    </div>
                    <Button children="В корзину" />
                </div>
            </div>
        </div>
    </div>
  )
}

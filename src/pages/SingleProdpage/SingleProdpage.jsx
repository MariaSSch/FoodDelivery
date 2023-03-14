import React from 'react';
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import Button from '../../components/Button/Button';
import Cart from '../../components/Cart/Cart';
import { getOutUser } from '../../store/authReducer';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addInCart } from '../../store/cartReducer';


import s from "./SingleProd.module.sass";

export default function SingleProdpage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const prod = useSelector(state => state.currentProd)
    
    const handleGetout = () => {
        dispatch(getOutUser());
        navigate("/app");
      }
      const handleAdd = () => {
        dispatch(addInCart(prod));
      }
  return (
    <div className={s.singlepage}>
        <div className={s.singlepageHeader}>
            <ArrowBtn />
            <div>
                <Cart />
                <Button children="Выйти" onClick={handleGetout}/>
            </div>
        </div>
        <div className={s.singlepageItem}>
            <div className={s.singlepageImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + prod.image})`}}></div>
            <div className={s.singlepageInfo}>
                <div className={s.singlepageTitle}>{prod.title}</div>
                <div className={s.singlepageFullDescr}>{prod.fullDescr}{prod.fullDescr}</div>
                <div className={s.singlepageOrder}>
                    <div>
                        <div className={s.singlepagePrice}>{prod.price}  &#8381;</div>
                        <div className={s.singlepageOutput}> / {prod.output}</div>
                    </div>
                    <Button children="В корзину" onClick={handleAdd}/>
                </div>
            </div>
        </div>
    </div>
  )
}

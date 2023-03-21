import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addInCart } from '../../store/cartReducer';
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Cart from '../../components/Cart/Cart';
import SingleProd from '../../components/SingleProd/SingleProd';
import s from "./SingleProdpage.module.sass";

export default function SingleProdpage() {

    const dispatch = useDispatch();
    const prod = useSelector(state => state.currentProd)
    
    const handleAdd = () => {
        dispatch(addInCart(prod));
      }

  return (
    <div className={s.singlepage}>
        <div className={s.singlepageHeader}>
            <ArrowBtn />
            <div>
                <Cart />
                <GetoutButton />
            </div>
        </div>
        <SingleProd prod={prod} handleAdd={handleAdd}/>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { addInCart } from '../../store/cartReducer';
import ArrowBtn from '../../UI/ArrowBtn/ArrowBtn';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Cart from '../../components/Cart/Cart';
import SingleProd from '../../components/SingleProd/SingleProd';
import s from "./SingleProdpage.module.sass";

export default function SingleProdpage() {
    const {id} = useParams();
    const [prod, setProd] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:8000/menu/${id}`)
            .then(res => res.json())
            .then(data => setProd(data))
      }, [id]);
    


    const dispatch = useDispatch();
    
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
        {prod && <SingleProd prod={prod} handleAdd={handleAdd}/>}
    </div>
  )
}

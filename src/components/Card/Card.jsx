import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentProd } from '../../store/currentProdReducer';
import AddBtn from '../AddBtn/AddBtn';
import s from "./Card.module.sass";

export default function Card({prod}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
      dispatch(setCurrentProd(prod));
      navigate(`app/${prod.id}`)
  }
 
  return (
    <div className={s.card}>
        <img src={process.env.PUBLIC_URL+prod.image} alt="foto"/>
        <p className={s.cardTitle}  onClick={handleClick}>
          {prod.title}
        </p>
        <p className={s.cardDescr}>
          {prod.description}
        </p>
        <div className={s.cardFooter}>
          <div>
            <p className={s.cardPrice}>
              {prod.price} &#8381;
            </p>
            <p className={s.cardOutput}>
              / {prod.output}
            </p>
          </div>
          <AddBtn prod={prod}/>       
        </div>
    </div>
  )
}

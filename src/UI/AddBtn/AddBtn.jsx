import React from 'react';
import { useDispatch } from 'react-redux';
import cross from "../../assets/cross.svg";
import { addInCart } from '../../store/cartReducer';
import s from "./AddBtn.module.sass";

export default function AddBtn({prod, ...props}) {

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addInCart(prod));
  }

  return (
    <button className={s.addBtn} {...props} onClick={handleAdd}>
      <img src={cross} alt="cross"/>
    </button>

    
  )
}

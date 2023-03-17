import React from 'react';
import { useDispatch } from 'react-redux';
import x_cross from "../../assets/x-cross.svg";
import { delFromCart } from '../../store/cartReducer';
import s from "./DeleteBtn.module.sass";

export default function AddBtn({prod}) {

    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(delFromCart(prod.id))
    }

  return (
    <button className={s.deleteBtn} onClick={handleDelete}>
      <img src={x_cross} alt="cross"/>
    </button>

    
  )
}

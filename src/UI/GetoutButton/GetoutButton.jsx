import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../store/cartReducer';
import { getOutUser } from '../../store/authReducer';


import s from "./GetoutButton.module.sass";

export default function GetoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGetout = () => {
    dispatch(getOutUser());
    dispatch(emptyCart());
    navigate("/app", {replace: true});
  }
  return (
    <button className={s.getoutBtn} type="submit" onClick={handleGetout}>Выйти</button>
  )
}

import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { getOutUser } from '../../store/authReducer';

import s from "./Catalog.module.sass";

export default function Catalog({menu}) {

  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
console.log(isAuth)
  const navigate = useNavigate();

  const handleGetout = () => {
    dispatch(getOutUser());
    navigate("/app");
  }

  return (
    <div className={s.homepage}>
      <div className={s.homepageHeader}>
        <h1>наша продукция</h1>
        <div>
          <Cart />
          <Button onClick={handleGetout}>Выйти</Button>
        </div>
      </div>
      <div className={s.homepageCardsContainer}>
      {
      menu.map(prod => {
        return <Card 
                key={prod.id} 
                prod={prod} />
      })
      }
      </div>
    </div>
  ) 
 
}

import React from 'react';
import { useDispatch } from "react-redux";

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { getOutUser } from '../../store/authReducer';

import s from "./Catalog.module.sass";

export default function Catalog({menu}) {



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetout = () => {
    dispatch(getOutUser());
    navigate("/app");
  }

  return (
    <div className={s.catalogpage}>
      <div className={s.catalogpageHeader}>
        <h1>наша продукция</h1>
        <div>
          <Cart />
          <Button onClick={handleGetout}>Выйти</Button>
        </div>
      </div>
      <div className={s.catalogpageCardsContainer}>
      {
      menu.map(prod => {
        return <Card 
                key={prod.id} 
                prod={prod} 
                />
      })
      }
      </div>
      <div>left</div>
      <div>right</div>
    </div>
  ) 
 
}

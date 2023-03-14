import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import { useAuth } from '../../useAuth/useAuth';

import s from "./Catalog.module.sass";

export default function Catalog({menu}) {
  const navigate = useNavigate();
  const handleR = () => {
    navigate("/app/register")
  }
  const {isAuth, login, password} = useAuth();

  return (
    <div className={s.homepage}>
      <div className={s.homepageHeader}>
        <h1>наша продукция</h1>
        <div>
          <Cart />
          <Button>Выйти</Button>
          <p onClick={handleR} style={{color:"white"}}>htibcnhfwbz</p>
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

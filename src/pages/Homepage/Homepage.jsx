import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import s from "./Homepage.module.sass";

export default function Homepage() {
  const [menu, setMenu] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/menu")
        .then(res => res.json())
        .then(data => setMenu(data))
  }, [])
  return (
    <div className={s.homepage}>
      <div className={s.homepageHeader}>
        <h1>наша продукция</h1>
        <Button>Выйти</Button>
      </div>
      <div className={s.cardsContainer}>
      {
      menu.map(item => {
        return <Card 
                key={item.id} 
                src={process.env.PUBLIC_URL+item.image} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                output={item.output} />
      })
      }
      </div>
    </div>
  )
}

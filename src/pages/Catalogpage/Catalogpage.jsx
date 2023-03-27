import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import ChooseCategory from '../../components/ChooseCategory/ChooseCategory';

import s from "./Catalogpage.module.sass";

export default function Catalogpage({menu}) {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const prodChoice = searchParams.get("app") || "";
  const navigate = useNavigate();

  const handleSelect = () => {
    const choice = document.querySelector("select").value;
    setSearchParams({app: choice})
  }

  const handleClick = (prod) => {
    navigate(`${prod.id}`)
}


  return (
    <div className={s.catalogpage}>
      <div className={s.catalogpageHeader}>
        <h1>наша продукция</h1>
        <div>
          <Cart />
          <GetoutButton />
        </div>
      </div>
      <ChooseCategory handleSelect={handleSelect}/>
      <div className={s.catalogpageCardsContainer}>
      {
      menu && menu.filter(prod => {
        if(prodChoice === "none" || prodChoice === "") {return menu} 
        else {return prod.category === prodChoice} 
      }).map(prod => {
        return <Card 
                key={prod.id} 
                prod={prod} 
                handleClick={()=>handleClick(prod)}
                />
      })
      }
      </div>
      <div>left</div>
      <div>right</div>
    </div>
  ) 
 
}

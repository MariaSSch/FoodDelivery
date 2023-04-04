import React, { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Cart from '../../components/Cart/Cart';
import ChooseCategory from '../../components/ChooseCategory/ChooseCategory';

import s from "./Catalogpage.module.sass";

export default function Catalogpage() {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const prodChoice = searchParams.get("/catalog") || "";

  const [choiceValue, setChoiceValue] = useState("none");
  const handleSelect = (e) => {
    const choice = e.target.value
    setSearchParams({"/catalog": choice});
    setChoiceValue(choice);
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
      <ChooseCategory handleSelect={handleSelect} value={choiceValue}/>
      <div className={s.catalogpageCardsContainer}>
      {/* {
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
      } */}
      <Outlet context={{prodChoice}}/>
      </div>
    </div>
  ) 
 
}

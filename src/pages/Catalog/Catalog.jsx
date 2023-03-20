import React from 'react';
import { useDispatch } from "react-redux";

import { useNavigate, useSearchParams } from 'react-router-dom';
import GetoutButton from '../../UI/GetoutButton/GetoutButton';
import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import ChooseCategory from '../../components/ChooseCategory/ChooseCategory';
import { setCurrentProd } from '../../store/currentProdReducer';

import s from "./Catalog.module.sass";

export default function Catalog({menu}) {

  const [searchParams, setSearchParams] = useSearchParams();
  const prodChoice = searchParams.get("app") || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = () => {
    const choice = document.querySelector("select").value;
    console.log("choice: ", choice)
    setSearchParams({app: choice})
  }

  const handleClick = (prod) => {
    dispatch(setCurrentProd(prod));
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
      menu.filter(prod => {
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

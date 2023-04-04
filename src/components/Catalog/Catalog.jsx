import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Card from '../Card/Card';

import s from "./Catalog.module.sass";

export default function Catalog({menu, prodChoice}) {

  const [prodsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  
  const context = useOutletContext();

  const visibleMenu = menu.filter(prod => {
    if(context.prodChoice === "none" || context.prodChoice === "") {return menu} 
    else {return prod.category === context.prodChoice}
     
  })
  useEffect(()=>{
    setCurrentPage(1)
  }, [context.prodChoice]);

  const totalPagesNum = Math.ceil(visibleMenu.length / prodsPerPage);
  const totalPages = [...Array(totalPagesNum+1).keys()].slice(1);
  const lastIndex = prodsPerPage * currentPage;
  const firstIndex = lastIndex - prodsPerPage;

  const navigate = useNavigate();
  const handleClick = (prod) => {
    navigate(`${prod.id}`)
}

  return (
    <div className={s.catalog}>
      <div className={s.catalogContainer}>
        {
        visibleMenu.slice(firstIndex, lastIndex).map(prod => {
          return <Card 
                  key={prod.id} 
                  prod={prod} 
                  handleClick={()=>handleClick(prod)}
                  />
        })
        }
        </div>
        <div className={s.catalogPages}>
            {
              totalPages.map((page) => <p key={page} 
                                          className={s.catalogPage}
                                          onClick={()=>setCurrentPage(page)} 
                                           >{page}</p>)
            }
          </div>

      </div>
  )
}

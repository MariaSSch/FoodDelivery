import React, { useState } from 'react';

import s from "./Catalog.module.sass";

export default function Catalog({menu}) {

  const {page} = useParams();
  const [prodsPerPage] = useState(8);

  

  return (
    <div className={s.catalogContainer}>
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
  )
}

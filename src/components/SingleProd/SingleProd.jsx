import React from 'react';

import Button from '../../UI/Button/Button';
import s from "./SingleProd.module.sass";

export default function SingleProd({prod, handleAdd}) {

  return (
    <div className={s.singleProd}>
        <div className={s.singleProdImg} style={{backgroundImage: `url(${process.env.PUBLIC_URL + prod.image})`}}></div>
        <div className={s.singleProdInfo}>
            <div className={s.singleProdTitle}>{prod.title}</div>
            <div className={s.singleProdFullDescr}>{prod.fullDescr}{prod.fullDescr}</div>
            <div className={s.singleProdOrder}>
                <div>
                    <div className={s.singleProdPrice}>{prod.price}  &#8381;</div>
                    <div className={s.singleProdOutput}> / {prod.output}</div>
                </div>
                <Button children="В корзину" onClick={handleAdd}/>
            </div>
        </div>
    </div>
  )
}

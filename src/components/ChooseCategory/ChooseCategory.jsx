import React from 'react';
import s from "./ChooseCategory.module.sass";

export default function ChooseCategory({handleSelect, value}) {

  return (
    <form className={s.choice} name="makechoice">
        <select name="yourchoice" value={value} onChange={handleSelect}>
            <option value="none">Выберите категорию</option>
            <option value="устрицы">Устрицы</option>
            <option value="свинина">Свинина</option>
            <option value="креветки">Креветки</option>
        </select>
    </form>
  )
}

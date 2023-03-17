import React from 'react';
import s from "./ChooseCategory.module.sass";

export default function ChooseCategory({handleChoice, handleSelect}) {
  return (
    <form className={s.choice} name="makechoice" onSubmit={handleChoice}>
        <select name="yourchoice" defaultValue="" onChange={handleSelect}>
            <option selected value="none">Выберите категорию</option>
            <option value="устрицы">Устрицы</option>
            <option value="свинина">Свинина</option>
            <option value="креветки">Креветки</option>
        </select>
    </form>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import s from "./Form.module.sass";

export default function Form({link, actionType, actionToDo, action}) {
  return (
    <div className={s.form}>
        <Link to={link} className={s.formLink}>{actionToDo}</Link>
        <h1>{actionType}</h1>
        <form action='#'>
            <input type="text" required placeholder='Логин' name="login"/>
            <input type="password" required placeholder="Пароль" name="password"/>
            <label htmlFor="agreement">
                <input type="radio" name="agreement"/>
                Я согласен получать обновления на почту
                <div className={s.formRadio}></div>
            </label>
            <Button children={action} />
        </form>
    </div>
  )
}

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import s from "./Form.module.sass";

export default function Form({onSubmitAction, link, actionType, actionToDo, action}) {

  const navigate = useNavigate();
  const handleGoTo = () => {
    navigate(`/app/${link}`)
  }
  return (
    <div className={s.form}>
        <p onClick={handleGoTo} className={s.formLink}>{actionToDo}</p>
        <h1>{actionType}</h1>
        <form action='#' onSubmit={onSubmitAction}>
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

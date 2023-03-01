import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import s from "./Form.module.sass";

export default function Form() {
  return (
    <div className={s.form}>
        <Link to='signin' className={s.link}>Авторизоваться</Link>
        <h1>Регистрация</h1>
        <form action='#'>
            <input type="text"placeholder='Логин' name="login"/>
            <input type="password" placeholder="Пароль" name="password"/>
            <label for="agreement">
                <input type="radio" name="agreement"/>
                Я согласен получать обновления на почту
            </label>
            <Button children={"Зарегистрироваться"} />
        </form>
    </div>
  )
}

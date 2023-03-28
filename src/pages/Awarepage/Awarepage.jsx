import React from 'react';
import { Link } from 'react-router-dom';
import s from "./Awarepage.module.sass";

export default function Awarepage() {
  return (
    <div className={s.awarepage}>
        <h1>
            Необходимо авторизоваться или зарегистрироваться
        </h1>
        <div className={s.links}>
            <Link to="/signin">Авторизоваться</Link>
            <Link to="/register">Зарегистрироваться</Link>
        </div>
    </div>
  )
}

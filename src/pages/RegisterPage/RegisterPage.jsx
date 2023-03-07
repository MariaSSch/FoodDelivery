import React from 'react';
import Form from '../../components/Form/Form';
import s from "./Register.module.sass";

export default function Registerpage() {
  return (
    <div className={s.registerpage}>
      <Form link={'/signin'} actionType="регистрация" actionToDo="Авторизоваться" action="Зарегистрироваться"/>
    </div>
  )
}

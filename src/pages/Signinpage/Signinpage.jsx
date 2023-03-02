import React from 'react';
import Form from '../../components/Form/Form';
import s from "./Signin.module.sass";


export default function Signinpage() {
  return (
    <div className={s.signin}>
      <Form link={'/register'} actionType="вход"  actionToDo="Зарегистрироваться"  action="Войти"/>
    </div>
  )
}

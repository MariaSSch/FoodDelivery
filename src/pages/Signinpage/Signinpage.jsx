import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../components/Form/Form';
import { setUser } from '../../store/authReducer';
import s from "./Signin.module.sass";


export default function Signinpage() {

  const dispatch = useDispatch();
  //const registeredUsers = useSelector();
  const handleSignin = (e) => {
    e.preventDefault();
    const currentUser = {
      login: e.target.login.value,
      password: e.target.password.value
    }
    dispatch(setUser(currentUser));
  }
  return (
    <div className={s.signinpage}>
      <Form onSubmit={handleSignin} link={'register'} actionType="вход"  actionToDo="Зарегистрироваться"  action="Войти"/>
    </div>
  )
}

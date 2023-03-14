import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from '../../store/authReducer';
import Form from '../../components/Form/Form';
import s from "./Register.module.sass";

export default function Registerpage() {

  const dispatch = useDispatch();
  const registeredUsers = useSelector(state => state.auth.registeredUsers);

console.log("users: ", registeredUsers)

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      login: e.target.login.value,
      password: e.target.password.value
    }
    if (registeredUsers.some(elem => newUser.login === elem.login)) {
     alert("such a login is already exist")

    } else {
      console.log(newUser)

    dispatch(getUser(newUser));
    alert("successfully registered")
    }
  }

  return (
    <div className={s.registerpage}>
      <Form onSubmitAction={handleRegister} link={'#'} actionType="регистрация" actionToDo="Авторизоваться" action="Зарегистрироваться"/>
    </div>
  )
}

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from '../../store/authReducer';
import Form from '../../components/Form/Form';
import s from "./Register.module.sass";
import { useNavigate } from 'react-router-dom';

export default function Registerpage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(getUser(newUser));
    alert("successfully registered");
    dispatch(setUser());
    navigate("/app");
    }
  }

  return (
    <div className={s.registerpage}>
      <Form onSubmitAction={handleRegister} link={'#'} actionType="регистрация" actionToDo="Авторизоваться" action="Зарегистрироваться"/>
    </div>
  )
}

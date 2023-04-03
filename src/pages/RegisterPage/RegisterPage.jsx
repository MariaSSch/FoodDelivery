import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getUser, setUser } from '../../store/authReducer';
import Form from '../../components/Form/Form';
import s from "./Register.module.sass";
import Modal from '../../UI/Modal/Modal';

export default function Registerpage() {

  const [modal, setModal] = useState(false);
  const [modalChild, setModalChild] = useState("");
  const closemodal = ()=> setModal(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredUsers = useSelector(state => state.auth.registeredUsers);


  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      login: e.target.login.value,
      password: e.target.password.value
    }
    if (registeredUsers.some(elem => newUser.login === elem.login)) {
     setModal(true);
     setModalChild("Такой логин уже существует, придумайте другой")

    } else {
    dispatch(getUser(newUser));
    // setModal(true);
    // setModalChild("Вы зарегистрированы!")
    dispatch(setUser());
    navigate("/catalog");
    }
  }

  return (
    <div className={s.registerpage}>
      <Form onSubmitAction={handleRegister} 
            link={'signin'} 
            actionType="регистрация" 
            actionToDo="Авторизоваться" 
            action="Зарегистрироваться"
            submitError=""/>
      {modal && <Modal closemodal={closemodal} children={modalChild}/>}
    </div>
  )
}

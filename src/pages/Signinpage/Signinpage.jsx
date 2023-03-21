import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/authReducer';
import Form from '../../components/Form/Form';
import s from "./Signin.module.sass";


export default function Signinpage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registeredUsers = useSelector(state => state.auth.registeredUsers);

  const handleSignin = (e) => {
    e.preventDefault();
    const currentUser = {
      login: e.target.login.value,
      password: e.target.password.value
    }
    if(registeredUsers.some(elem => currentUser.login === elem.login && currentUser.password === elem.password)) {
      dispatch(setUser());
      navigate("/app");

    } else {
      alert("wrong login or password")
    }
  }

return (
    <div className={s.signinpage}>
      <Form onSubmitAction={handleSignin} 
            link={'register'} 
            actionType="вход"  
            actionToDo="Зарегистрироваться"  
            action="Войти"/>
    </div>
  )
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/authReducer';
import Form from '../../components/Form/Form';
import s from "./Signin.module.sass";


export default function Signinpage() {

  const [submitError, setSubmitError] = useState("");
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
      navigate("/catalog");

    } else {
      setSubmitError("Логин или пароль неверен");
    }
  }

return (
    <div className={s.signinpage}>
      <Form onSubmitAction={handleSignin} 
            link={'register'} 
            actionType="вход"  
            actionToDo="Зарегистрироваться"  
            action="Войти"
            submitError={submitError}/>
    </div>
  )
}

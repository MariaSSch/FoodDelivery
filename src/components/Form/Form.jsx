import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';

import s from "./Form.module.sass";

export default function Form({onSubmitAction, link, actionType, actionToDo, action, submitError}) {

  const navigate = useNavigate();
  const handleGoTo = () => {
    navigate(`/app/${link}`)
  }
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
  const [isValid, setIsValid] = useState(false);

  const inputLogin = document.querySelector("input#login");
  const inputPassword = document.querySelector("input#password");
  
  
  const handleLoginValidation = () => {
    if(inputLogin.validity.valid && inputPassword.validity.valid){
      setIsValid(true);
      setLoginError("")
    } else {
      setLoginError(showError(inputLogin));
      setIsValid(false);
    }
}
const handlePasswordValidation = () => {
  if(inputLogin.validity.valid && inputPassword.validity.valid) {
    setIsValid(true);
    setPasswordError("")

  } else {
    setPasswordError(showError(inputPassword));
    setIsValid(false);
  }
}

const showError = (input) => {
  if(input.validity.valueMissing) {
    return "Поле не должно быть пустым";
   } else if(input.validity.tooShort) {
    return "Поле должно содержать не менее 4-х символов";
   } 
   else if(input.validity.patternMismatch){
    if(input===inputLogin) {
      return "Логин может содержать латинские буквы и цифры 0-9"
    } else {return "Пароль должен содержать большие и маленькие латинские буквы, спецсиволы и цифры 0-9"}
        
        
  }
}



// pattern="/^[a-zA-Z0-9]{4,20}$/"
// pattern="/(?=^.{4,20}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/"

  return (
    <div className={s.form}>
        {/* <p onClick={handleGoTo} className={s.formLink}>{actionToDo}</p> */}
        <Link className={s.formLink} to={`/app/${link}`}>{actionToDo}</Link>
        <h1>{actionType}</h1>
        <form noValidate 
              action='#' 
              onSubmit={onSubmitAction} 
              autoComplete="off"
              >
            <input id="login" type="text" 
                    required 
                    placeholder='Логин'
                    minLength="4" 
                    maxLength={20}
                    pattern="^[a-zA-Z0-9]{4,20}$"
                    name="login"
                    value={login}
                    onChange={e=> setLogin(e.target.value)}
                    onInput={handleLoginValidation}
                    />
            <span className={s.loginError} id="loginError">{loginError}</span>
            <input id="password" type="password" 
                    required 
                    placeholder="Пароль" 
                    minLength="4"
                    maxLength={20}
                    pattern="(?=^.{4,20}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                    name="password"
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    onInput={handlePasswordValidation}
                    />
            <span className={s.passwordError} id="passwordError">{passwordError}</span>
            <label htmlFor="agreement">
                <input type="radio" name="agreement"/>
                Я согласен получать обновления на почту
                <div className={s.radioControl}></div>
            </label>
            <span className={s.submitError} id="submitError">{submitError}</span>
            <Button 
              children={action} 
              disabled={!isValid}
              />
        </form>
    </div>
  )
}

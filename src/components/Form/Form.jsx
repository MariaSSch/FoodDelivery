import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';

import s from "./Form.module.sass";

export default function Form({onSubmitAction, link, actionType, actionToDo, action, submitError}) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 
  const [isValid, setIsValid] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();
  
  
  const handleLoginValidation = () => {
    if(loginRef.current.validity.valid && passwordRef.current.validity.valid){
      setIsValid(true);
      setLoginError("")
    } else {
      setLoginError(showError(loginRef.current));
      setIsValid(false);
    }
}
const handlePasswordValidation = () => {
  if(loginRef.current.validity.valid && passwordRef.current.validity.valid) {
    setIsValid(true);
    setPasswordError("")

  } else {
    setPasswordError(showError(passwordRef.current));
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
    if(input===loginRef) {
      return "Логин может содержать латинские буквы и цифры 0-9"
    } else {return "Пароль должен содержать большие и маленькие латинские буквы, спецсиволы и цифры 0-9"}
        
        
  }
}
  return (
    <div className={s.form}>
        <Link className={s.formLink} to={`/${link}`}>{actionToDo}</Link>
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
                    ref={loginRef}
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
                    ref={passwordRef}
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

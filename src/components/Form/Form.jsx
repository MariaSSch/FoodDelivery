import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';

import s from "./Form.module.sass";

export default function Form({onSubmitAction, link, actionType, actionToDo, action}) {

  const navigate = useNavigate();
  const handleGoTo = () => {
    navigate(`/app/${link}`)
  }
  const spanLogin = document.querySelector("span#loginError");
  const spanPassword = document.querySelector("span#passwordError");
  const spanSubmit = document.querySelector("span#submitError");

  const inputLogin = document.querySelector("input#login");
  const inputPassword = document.querySelector("input#password");

  const handleInputValidation = (input, span) => {
      if(input.validity.valid) {
        span.style.visibility = "hidden";
        span.textContent = "";
      } else {
        showError(input, span);
      }
  }
const showError = (input, span) => {
 // span.textContent = "";
  span.style.visibility = "visible";

  if(input.validity.valueMissing) {
    span.textContent = "Поле не должно быть пустым";
   } else if(input.validity.tooShort) {
    span.textContent = "Поле должно содержать не менее 4-х символов"
  } else if(input.validity.tooLong){
    span.textContent = "Поле должно содержать не более 20 символов"
  } //else if(!input.validity.patternMismatch){
  //   span.textContent = input===inputLogin ?
  //       "Логин может содержать латинские буквы и цифры 0-9" :
  //       "Пароль должен содержать большие и маленькие латинские буквы, спецсиволы и цифры 0-9";
  // }
}

const handleValidation = (inputL, inputP) => {

  if(inputL.validity.valid && inputP.validity.valid) {
    spanSubmit.style.visibility = "hidden";
    console.log("done")
    return true
  } else {
    // handleInputValidation(inputLogin, spanLogin);
    // handleInputValidation(inputPassword, spanPassword);
    return false;
  }
}
// pattern="/^[a-zA-Z0-9]{4,20}$/"
// pattern="/(?=^.{4,20}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/"

  return (
    <div className={s.form}>
        {/* <p onClick={handleGoTo} className={s.formLink}>{actionToDo}</p> */}
        <Link className={s.formLink} to={`/app/${link}`}>{actionToDo}</Link>
        <h1>{actionType}</h1>
        <form noValidate action='#' onSubmit={()=>handleValidation(inputLogin, inputPassword)? onSubmitAction : console.log("do it again")} autoComplete="off">
            <input id="login" type="text" 
                    required 
                    placeholder='Логин'
                    minLength="4" 
                    maxLength={20}
                    name="login"
                    onChange={(e)=>e.target.value}
                    onInput={()=>handleInputValidation(inputLogin, spanLogin)}/>
            <span className={s.loginError} id="loginError"></span>
            <input id="password" type="password" 
                    required 
                    placeholder="Пароль" 
                    minLength="4"
                    maxLength={20}
                    name="password"
                    onChange={(e)=>e.target.value}
                    onInput={()=>handleInputValidation(inputPassword, spanPassword)}/>
            <span className={s.passwordError} id="passwordError"></span>
            <label htmlFor="agreement">
                <input type="radio" name="agreement"/>
                Я согласен получать обновления на почту
                <div className={s.radioControl}></div>
            </label>
            <span className={s.submitError} id="submitError">Логин или пароль неверен</span>
            <Button children={action} />
        </form>
    </div>
  )
}

import React from 'react';
import s from "./Button.module.sass";

export default function Button({children, ...props}) {

  return (
    <button className={s.button} type="submit" {...props}>{children}</button>
  )
}

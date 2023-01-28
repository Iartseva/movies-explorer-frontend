import React from "react";
import { Link } from 'react-router-dom';
import './Form.css';
import logo from "../../images/logo-form.svg"

function Form(props) {
  return (
    <section className="form">
      <form className="form-container">
      <Link to="/" className="form__logo">
        <img alt="логотип проекта" src={logo}></img>
      </Link>
        {props.children}
      </ form> 
    </ section>
  )
}

export default Form;
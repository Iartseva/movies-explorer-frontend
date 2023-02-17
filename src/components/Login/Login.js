import React from "react";
import { Link } from 'react-router-dom';
import useValidation from "../../hooks/useValidation";
import Form from '../Form/Form';
import './Login.css';
import '../Form/Form.css';

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } =
  useValidation({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.handleLogin(values.email, values.password);
    }
    //resetForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
        <h2 className="form__title">Рады видеть!</h2>
        <label className="form__input-label">
          E-mail
          <input
            className="form__input form__input_type_email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
           // autoComplete="username"
            minLength={4}
            required
            onChange={handleChange}
            value={values.email || ""}
            pattern="\S+@\S+\.\S+"
          />
          <span
            className={`form__input-error email-error ${
              isValid ? "" : "form__input-error_visible"
            }`}
          >
            {errors.email}
          </span>
        </label>
        <label className="form__input-label">
          Пароль
          <input
            className="form__input form__input_type_password"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
            required
            onChange={handleChange}
            value={values.password || ""}
          />
          <span
            className={`form__input-error email-error ${
              isValid ? "" : "form__input-error_visible"
            }`}
          >
            {errors.password}
          </span>
        </label>
        <span
            className={`form__request-error ${
              !props.isRequestError ? "" : "form__request-error_visible"
            }`}
          >
            {props.requestErrorText}
          </span>
        <button
          className={`form__button-submit form__button-submit_type_login ${isValid ? '' : 'form__button-submit_disabled'}`}
          type="submit"
          disabled={!isValid}
        >
          Войти
        </button>
        <p className="form__redirect">
        Ещё не зарегистрированы? 
          <Link to='/signup' className="form__redirect-link">
            Зарегистрироваться
          </Link>
        </p>
    </Form>
  );
}

export default Login;

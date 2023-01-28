import React from "react";
import useValidation from "../../hooks/useValidation";
import './Profile.css';
import '../Form/Form.css'

function Profile(props) {
  const { values, handleChange, errors, isValid, /* setValues, resetForm */ } =
  useValidation({
    name: "",
    email: "",
    password: "",
  });

  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Оля!</h2>
        <div className="profile__group">
          <label className="profile__input-label" htmlFor="name">Имя</label> 
          <input
            className="profile__input form__input_type_name"
            id="name"
            name="name"
            type="name"
            placeholder="Имя"
            autoComplete="name"
            minLength={4}
            required
            onChange={handleChange}
            value={values.name || ""}
          />
        </div>
        <span
            className={`profile__input-error name-error ${
              isValid ? "" : "profile__input-error_visible"
            }`}
          >
            {errors.password}
        </span>
        <div className="profile__line"></div>
        <div className="profile__group">
          <label className="profile__input-label" htmlFor="email">E-mail</label>
          <input
            className="profile__input form__input_type_email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="username"
            minLength={4}
            required
            onChange={handleChange}
            value={values.email || ""}
          />
        </div>
        <span
            className={`profile__input-error email-error ${
              isValid ? "" : "profile__input-error_visible"
            }`}
          >
            {errors.email}
          </span>
        <button
          className="profile__button-submit"
          type="submit"
          //onClick={props.handleRegister}
        >
          Редактировать
        </button>
        <button 
          type="button" 
          className="profile__logout" 
          >
            Выйти из аккаунта
          </button>
      </form>
    </section>
  );
}

export default Profile;
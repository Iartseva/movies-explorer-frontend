import React, { useContext, useState, useEffect } from "react";
import useValidation from "../../hooks/useValidation";
import './Profile.css';
import '../Form/Form.css';
import CurrentUserContext from '../../utils/CurrentUserContext';
import Header from "../Header/Header";

function Profile(props) {
  const { values, handleChange, errors, isValid, resetForm } =
  useValidation({
    name: "",
    email: "",
  });

  const currentUser = useContext(CurrentUserContext);
  const [isNewValues, setIsNewValues] = useState(false);
  //const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsNewValues(false);
    } else {
      setIsNewValues(true);
    }
  }, [values]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleChange(values.name, values.email);
  }
  
  return (
    <>  
      <Header isLoggedIn={props.isLoggedIn} />
      <section className="profile">
        <form className="profile__form" noValidate onSubmit={handleSubmit}>
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__group">
            <label className="profile__input-label" htmlFor="name">Имя</label> 
            <input
              className="profile__input form__input_type_name"
              id="name"
              name="name"
              type="name"
              placeholder={currentUser.name}
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
              placeholder={currentUser.email}
              autoComplete="username"
              minLength={4}
              required
              onChange={handleChange}
              value={values.email || ""}
              pattern="\S+@\S+\.\S+"
            />
          </div>
          <span
              className={`profile__input-error email-error ${
                isValid ? "" : "profile__input-error_visible"
              }`}
            >
              {errors.email}
            </span>
          {props.isSuccess ? 
            (<span className='profile__success profile__success_visible'>
              Данные успешно изменены</span>
            ) : (
              <span className='profile__success'>Данные успешно изменены</span>
            )}
          <span
            className={`form__request-error ${
              !props.isRequestError ? "" : "form__request-error_visible"
            }`}
          >
            {props.requestErrorText}
          </span>
          <button
            className={`profile__button-submit ${isValid && isNewValues ? '' : 'profile__button-submit_disabled'}`}
            type="submit"
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button 
            type="button" 
            className="profile__logout" 
            onClick={props.logout}
            >
              Выйти из аккаунта
            </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
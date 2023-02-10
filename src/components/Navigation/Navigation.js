import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import close from '../../images/close.svg';
import account from '../../images/account.svg';

function Navigation(props) {
  return (
    <section className="navigation">
      <img src={close} alt='кнопка закрытия' className='navigation__close-button' onClick={props.handleClose}></img>
      <nav className='navigation__menu'>
        <Link to='/' className='navigation__menu-item'>Главная</Link>
        <Link to='/movies' className='navigation__menu-item'>Фильмы</Link>
        <Link to='/saved-movies' className='navigation__menu-item'>Сохраненные фильмы</Link>
      </nav> 
      <Link to='/profile' className='navigation__account'><img alt='переход в аккаунт' src={account}></img></Link>
    </section>
  );
}

export default Navigation;

import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo-form.svg';
import account from '../../images/account.svg';
import burger from '../../images/burger.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isClicked, setIsClicked] = useState(false);

  function handleMenuOpen() {
    setIsClicked(true);
  }

  function handleMenuClose() {
    setIsClicked(false);
  }

  return (
    <Switch>
      <Route path="/" exact>
        <section className="header">
          <Link to="/" className='header__logo'><img alt="логотип проекта" src={logo}></img></Link>
          <nav className='header__nav'>
            <Link to="/signup" className='header__nav-item'>Регистрация</Link>
            <Link to="/signin" className='header__nav-item'>Войти</Link>
          </nav> 
        </section>
      </Route>

      <Route path={['/movies', '/saved-movies', '/profile']}>
        <section className='header'>
          <Link to="/" className='header__logo'><img alt="логотип проекта" src={logo}></img></Link>
          <nav className='header__menu'>
            <Link to='/movies' className='header__menu-item'>Фильмы</Link>
            <Link to='/saved-movies' className='header__menu-item'>Сохраненные фильмы</Link>
          </nav> 
          <Link to='/profile' className='header__account'>
            <img alt='переход в аккаунт' src={account} className='header__account-picture'></img>
          </Link>
          <button onClick={handleMenuOpen} className="header__menu-button">
              <img src={burger} alt='меню' />
          </button>
          {isClicked ? <Navigation handleClose={handleMenuClose} /> : ''}
        </section>
      </Route>
    </Switch>
  );
}

export default Header;
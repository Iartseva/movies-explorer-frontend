import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
// import Preloader from '../Preloader/Preloader';

import CurrentUserContext from '../../utils/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header />
            <SearchForm />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

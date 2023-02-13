import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import '../MoviesCard/MoviesCard.css';
import '../MoviesCardList/MoviesCardList.css';

function SavedMovies(props) {
  const [isCheckbox, setIsCheckbox] = useState(false); 
  const [initaialSavedMovies, setInitaialSavedMovies] = useState(props.savedMovies); 
  const [querySaved, setQuerySaved] = useState(''); 
  const [isNotFoundError, setIsNotFoundError] = useState(false);
  
  // фильтрация короткометражек
  function filterDuration(movies) {
    return movies.filter((movie) => movie.duration < 30);
  }

  // поисковая строка
  function filterMovies(movies, query) {
    const requiredMovie = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const newQuery = query.toLowerCase().trim();
      return movieRu.indexOf(newQuery) !== -1;
    });
    return requiredMovie;
  } 

  // сабмит поиска
  function handleSearchSavedMovies(query) {
    setQuerySaved(query);
  }

  // изменение чекбокса
  function handleCheckbox() {
    setIsCheckbox(!isCheckbox);
    //isCheckbox ? setInitaialSavedMovies(initaialSavedMovies) : setInitaialSavedMovies(filterDuration(initaialSavedMovies));
    //localStorage.setItem('shortfilms', !isCheckbox);
  }

  // отображение карточек
  useEffect(() => {
    const moviesList = filterMovies(props.savedMovies, querySaved);  
    if (isCheckbox) {
      setInitaialSavedMovies(filterDuration(moviesList))
    }
    else {
      setInitaialSavedMovies(moviesList);
    }
  }, [isCheckbox, querySaved, props.savedMovies]);

  /* // установка положения чекбокса
  useEffect(() => {
    if (localStorage.getItem('shortfilms') === 'true') {
      setIsCheckbox(true);
    } else {
      setIsCheckbox(false);
    }
  }, []); */

  // установка ошибки поиска
  useEffect(() => {
    if (initaialSavedMovies.length === 0) {
      setIsNotFoundError(true);
    } else {
      setIsNotFoundError(false);
    }
  }, [initaialSavedMovies]);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} />
      <SearchForm 
        onSearchMovies={handleSearchSavedMovies} 
        isCheckbox={isCheckbox} 
        onCheckbox={handleCheckbox}/>
      <MoviesCardList
        isNotFoundError={isNotFoundError}
        isSavedFilms={true}
        onCardDelete={props.onCardDelete}
        cards={initaialSavedMovies}
        savedMovies={props.savedMovies}
        isLoading={props.isLoading}
      />
      <Footer />
    </>
  )}

  export default SavedMovies;
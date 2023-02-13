import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies(props) {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]); 
  const [foundAndCheckboxMovies, setFoundAndCheckboxMovies] = useState([]); 
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

  function handleFilterMovies(movies, query, short) {
    const moviesList = filterMovies(movies, query, short); 
    setFoundMovies(moviesList);
    setFoundAndCheckboxMovies(short ? filterDuration(moviesList) : moviesList); 
    localStorage.setItem('foundmovies', JSON.stringify(moviesList));
    if (moviesList.length === 0) {
      setIsNotFoundError(true);
    }
  }

  // изменение чекбокса
  function handleCheckbox() {
    setIsCheckbox(!isCheckbox);
    if (!isCheckbox) {
      setFoundAndCheckboxMovies(filterDuration(foundMovies))
    } 
    else {
      setFoundAndCheckboxMovies(foundMovies)
    }
    localStorage.setItem('shortfilms', !isCheckbox);
  }

  // сабмит поиска
  function handleSearchMovies(query) {
    localStorage.setItem('query', query);
    localStorage.setItem('shortfilms', isCheckbox);
    const movies = JSON.parse(localStorage.getItem('initialMovies'));
    handleFilterMovies(movies, query, isCheckbox);
  } 

  // отображение карточек 
  useEffect(() => {
    if (localStorage.getItem('foundmovies')) {
      const movies = JSON.parse(localStorage.getItem('foundmovies'));
      setFoundMovies(movies);
    if (localStorage.getItem('shortfilms') === 'true') {
        setFoundAndCheckboxMovies(filterDuration(movies));
    } else {
      setFoundAndCheckboxMovies(movies);
    }
  } else {
      setIsNotFoundError(true);
    }
  }, []);

  // установка ошибки поиска
  useEffect(() => {
    if (localStorage.getItem('foundmovies') && foundAndCheckboxMovies.length === 0) {
      setIsNotFoundError(true);
    } else {
      setIsNotFoundError(false);
    }
  }, [foundAndCheckboxMovies, foundMovies ])

  // установка положения чекбокса
  useEffect(() => {
    if (localStorage.getItem('shortfilms') === 'true') {
      setIsCheckbox(true);
    } else {
      setIsCheckbox(false);
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} 
      />
      <SearchForm 
        onSearchMovies={handleSearchMovies} 
        isCheckbox={isCheckbox}
        onCheckbox={handleCheckbox}
      />
      <MoviesCardList 
        isSavedFilms={false}     
        isQueryError={props.isQueryError}
        isNotFoundError={isNotFoundError}
        savedMovies={props.savedMovies} 
        cards={foundAndCheckboxMovies}
        handleLikeClick={props.handleLikeClick}
        onCardDelete={props.onCardDelete}
        isLoading={props.isLoading}
      />
      <Footer />
    </>
  ) 
}

export default Movies;

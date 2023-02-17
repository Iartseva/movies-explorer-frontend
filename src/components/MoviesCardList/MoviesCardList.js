import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { SCREEN_L, SCREEN_S, CARDCOUNT_FOR_L, CARDCOUNT_FOR_M, CARDCOUNT_FOR_S } from '../../utils/constants';

function MoviesCardList(props) {
  const [shownCards, setShownCards] = useState(0);
  const { pathname } = useLocation();

  function getshownCards() {
    const screensize = window.innerWidth;
    if (screensize > SCREEN_L) {
      setShownCards(CARDCOUNT_FOR_L);
    }
    else if (screensize > SCREEN_S && screensize < SCREEN_L) {
      setShownCards(CARDCOUNT_FOR_M);
    }
    else {
      setShownCards(CARDCOUNT_FOR_S);
    } 
  }

  function showMoreCards() {
    const screensize = window.innerWidth;
    if (screensize > SCREEN_L) {
      setShownCards(shownCards + 3);
    }
    else if (screensize > SCREEN_S && screensize < SCREEN_L) {
      setShownCards(shownCards + 2);
    }
    else {
      setShownCards(shownCards + 5);
    }   
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }  

  useEffect(() => {
    getshownCards();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', getshownCards);
    }, 1000);
  });

  return (
    <div className="moviescardlist">
      {props.isLoading && <Preloader />}
      {props.isNotFoundError ? <div className='searchform-error'>Ничего не найдено</ div> : ''} 
      {props.isQueryError ? <div className='searchform-error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</ div> : ''}
      {!props.isLoading && !props.isQueryError && !props.isNotFoundError && (
        <>
          {pathname === '/movies' ? (         
            <>
              <ul className="moviescardlist__ul">
                {props.cards.slice(0, shownCards).map((card) => (
                  <MoviesCard
                    key={props.isSavedFilms ? card._id : card.id}
                    isSavedFilms={props.isSavedFilms}
                    handleLikeClick={props.handleLikeClick}
                    onCardDelete={props.onCardDelete}
                    savedMovies={props.savedMovies}
                    saved={getSavedMovieCard(props.savedMovies, card)}
                    cards={props.cards}
                    card={card}
                    isRequestError={props.isRequestError} 
                    requestErrorText={props.requestErrorText}
                  />
                ))}
              </ul>
              {props.cards.length > shownCards ? (
                <button className="moviescardlist__button" onClick={showMoreCards}>
                  Ещё
                </button>
                ) : (
                ''
              )}
            </>
          ) : (
            <ul className="moviescardlist__ul">
              {props.cards.map((card) => (
                <MoviesCard
                  key={props.isSavedFilms ? card._id : card.id}
                  isSavedFilms={props.isSavedFilms}
                  handleLikeClick={props.handleLikeClick}
                  onCardDelete={props.onCardDelete}
                  savedMovies={props.savedMovies}
                  saved={getSavedMovieCard(props.savedMovies, card)}
                  cards={props.cards}
                  card={card}
                  isRequestError={props.isRequestError} 
                  requestErrorText={props.requestErrorText}
                />
              ))}
          </ul>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;


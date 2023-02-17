import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
  const { pathname } = useLocation();

  function onCardClick() {
    if (props.saved) {
      props.onCardDelete(props.savedMovies.filter((m) => m.movieId === props.card.id)[0]);
    } else {
      props.handleLikeClick(props.card);
    }
  }

  function onDelete() {
    props.onCardDelete(props.card);
  }  

  function convertTime(duration) {
    return `${Math.floor(duration / 60)} ч ${duration % 60} мин`;
  }

  return (
    <li className="moviescard">
      <div className='moviescard__info'>
        <h3 className='moviescard__name'>{props.card.nameRU}</h3>
        <span className='moviescard__time'>{convertTime(props.card.duration)}</span>
      </div>
      <a href={props.card.trailerLink} target="_blank" rel="noreferrer">
      <img className='moviescard__image' src={props.isSavedFilms ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`} alt={props.card.nameRU}></img>
      </a>
      {pathname === '/saved-movies' ? (
        <button type="button" className='moviescard__temporarily' onClick={onDelete}></button>
        ) : (
        <button type="button" className={props.saved ? 'moviescard__delete-from-saved' : 'moviescard__save'} onClick={props.isSavedFilms ? onDelete : onCardClick }>{props.saved ? '' : 'Сохранить'}</button>
      )}
      <span
            className={`moviescard__request-error ${
              !props.isRequestError ? "" : "moviescard__request-error_visible"
            }`}
          >
            {props.requestErrorText}
        </span>
    </li>    
  );
}

export default MoviesCard;
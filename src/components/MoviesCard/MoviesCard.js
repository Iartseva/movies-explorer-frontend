import React, { useState } from 'react';
import './MoviesCard.css';
import filmPhoto from '../../images/film-image.jpg';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  function changeSaved() {
    if(isSaved) {
      setIsSaved(false);
    }
    else {
      setIsSaved(true);
    }
  }

  return (
    <li className="moviescard">
      <div className='moviescard__info'>
        <h3 className='moviescard__name'>В погоне за Бенкси</h3>
        <span className='moviescard__time'>{props.duration}</span>
      </div>
      <img className='moviescard__image' src={filmPhoto} alt='фото из фильма'></img>
      {isSaved ? (
          <button type="button" className='moviescard__delete-from-saved' onClick={changeSaved}></button>
        ) : (
          <button type="button" className='moviescard__save' onClick={changeSaved}>Сохранить</button>
        )}
    </li>    
  );
}

export default MoviesCard;
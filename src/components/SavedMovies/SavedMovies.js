import React from 'react';
import '../MoviesCard/MoviesCard.css';
import '../MoviesCardList/MoviesCardList.css';
import filmPhoto from '../../images/film-image.jpg';

function SavedMovies() {
  return (
    <div className="moviescardlist">
      <ul className="moviescardlist__ul">
        <li className="moviescard">
          <div className='moviescard__info'>
            <h3 className='moviescard__name'>В погоне за Бенкси</h3>
            <span className='moviescard__time'>27 минут</span>
          </div>
          <img className='moviescard__image' src={filmPhoto} alt='фото из фильма'></img>
          <button type="button" className='moviescard__temporarily'></button>
        </li>
        <li className="moviescard">
          <div className='moviescard__info'>
            <h3 className='moviescard__name'>В погоне за Бенкси</h3>
            <span className='moviescard__time'>27 минут</span>
          </div>
          <img className='moviescard__image' src={filmPhoto} alt='фото из фильма'></img>
          <button type="button" className='moviescard__temporarily'></button>
        </li>
        <li className="moviescard">
          <div className='moviescard__info'>
            <h3 className='moviescard__name'>В погоне за Бенкси</h3>
            <span className='moviescard__time'>27 минут</span>
          </div>
          <img className='moviescard__image' src={filmPhoto} alt='фото из фильма'></img>
          <button type="button" className='moviescard__temporarily'></button>
        </li>
      </ul>
    </div>
  )}

  export default SavedMovies;
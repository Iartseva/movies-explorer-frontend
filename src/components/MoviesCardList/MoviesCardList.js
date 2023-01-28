import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <div className="moviescardlist">
      <ul className="moviescardlist__ul">
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${1} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${1} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
        <MoviesCard duration={`${0} ч. ${27} мин.`}/>
      </ul>
      <button className='moviescardlist__button'>Еще</button>
    </div>
  );
}

export default MoviesCardList;
import React from 'react';
import './Portfolio.css';
import pointer from '../../images/pointer.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <nav className='portfolio__menu'>
        <h4 className='portfolio__title'>Портфолио</h4>
        <a className='portfolio__menu-item' target="_blank" href='https://github.com/Iartseva/how-to-learn'>
          <p className='portfolio__menu-item-text'>Статичный сайт</p>
          <img className='portfolio__menu-item-picture' src={pointer} alt='стрелка'></img>
        </a>
        <a className='portfolio__menu-item' target="_blank" href='https://github.com/Iartseva/russian-travel'>
          <p className='portfolio__menu-item-text'>Адаптивный сайт</p>
          <img className='portfolio__menu-item-picture' src={pointer} alt='стрелка'></img>
        </a>
        <a className='portfolio__menu-item' target="_blank" href='https://github.com/Iartseva/mesto-react'>
          <p className='portfolio__menu-item-text'> Одностраничное приложение</p>
          <img className='portfolio__menu-item-picture' src={pointer} alt='стрелка'></img> 
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
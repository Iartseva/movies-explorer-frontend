import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="searchform">
      <div className='searchform__container'>
        <form className='searchform__form'>
          <input className='searchform__input' placeholder='Фильм' required></input>
          <button className='searchform__button' type='submit'>Поиск</button>
        </form>
        <FilterCheckbox />
        <div className='searchform__line'></div>
      </div>
    </section>
  );
}

export default SearchForm;
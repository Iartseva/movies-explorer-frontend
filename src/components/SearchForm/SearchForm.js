import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import '../Form/Form.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import useValidation from '../../hooks/useValidation';

function SearchForm(props) {

  const [isQueryError, setIsQueryError] = useState(false);
  const [queryText, setQueryText] = useState('');
  
  function handleSubmit(evt) {
    evt.preventDefault();
    if (queryText.length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      props.onSearchMovies(queryText);
    }
  }

  function handleChange(e) {
    setQueryText(e.target.value);
  }

  /*  function handleInput(e) {
      sessionStorage.setItem('query', query);
    }
  */

  useEffect(() => {
    if (localStorage.getItem('query')) {
      setQueryText(localStorage.getItem('query'));
    }
  }, []);

  return (
    <section className="searchform">
      <div className='searchform__container'>
        <form className='searchform__form' noValidate onSubmit={handleSubmit}> 
          <input 
            className='searchform__input' 
            placeholder='Фильм'
            required 
            id="query"
            name="query"
            type="text"
            onChange={handleChange}
            /* onInput={handleInput} */
            value={queryText || ""}
            >
            </ input>
          <button className='searchform__button' type='submit'>Поиск</button>
        </form>
        {isQueryError ? (<span className="searchform__input-error searchform__input-error_visible">Нужно ввести ключевое слово</span>
        ) : (
          <span className="searchform__input-error"></span>
        )}
        <FilterCheckbox onCheckbox={props.onCheckbox} isCheckbox={props.isCheckbox}/>
        <div className='searchform__line'></div>
      </div>
    </section>
  );
}

export default SearchForm;
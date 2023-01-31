import React, { useState } from 'react';
import './SearchForm.css';
import '../Form/Form.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useValidation from '../../hooks/useValidation';

function SearchForm() {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
  useValidation({
    query: "",
  });

  return (
    <section className="searchform">
      <div className='searchform__container'>
        <form className='searchform__form' noValidate> 
          <input 
            className='searchform__input' 
            placeholder='Фильм' 
            required 
            id="query"
            name="query"
            type="text"
            onChange={handleChange}
          />
          <button className='searchform__button' type='submit'>Поиск</button>
        </form>
        <span
            className={`searchform__input-error query-error ${
              isValid ? "" : "searchform__input-error_visible"
            }`}
          >
            {errors.query}
          </span>
        <FilterCheckbox />
        <div className='searchform__line'></div>
      </div>
    </section>
  );
}

export default SearchForm;
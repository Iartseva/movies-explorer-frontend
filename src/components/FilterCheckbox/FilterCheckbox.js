import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <section className="filtercheckbox">
      <input className="filtercheckbox__input" type="checkbox"></input>
      <span className="filtercheckbox__text">Короткометражки</span>
    </section>
  );
}

export default FilterCheckbox;
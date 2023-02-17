import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <section className="filtercheckbox">
      <input 
        className="filtercheckbox__input" 
        type="checkbox" 
        onChange={props.onCheckbox}
        checked={props.isCheckbox} />
      <span className="filtercheckbox__text">Короткометражки</span>
    </section>
  );
}

export default FilterCheckbox;
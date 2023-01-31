import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <h3 className='about-project_subtitle about-project_subtitle_1'>Дипломный проект включал 5 этапов</h3>
        <h3 className='about-project_subtitle about-project_subtitle_3'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project_text about-project_subtitle_4'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        <p className='about-project_text about-project_subtitle_2'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className='about-project__scope'>
        <h3 className='about-project_scope-time about-project_scope-time_color_green'>1 неделя</h3>
        <h3 className='about-project_scope-time about-project_scope-time_color_grey'>4 недели</h3>
        <p className='about-project_scope-about'>Back-end</p>
        <p className='about-project_scope-about'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
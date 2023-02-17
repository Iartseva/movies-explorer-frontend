import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__main'>
        <div className='about-me__info'>
          <h2 className='about-me__name'>Ольга Ярцева</h2>
          <h3 className='about-me__job'>Фронтенд-разработчик, 32 года</h3>
          <p className='about-me__text'>Я живу в Москве. Работаю в ИТ-отрасли уже более 10 лет. Последние 8 лет работаю в компании "БАРС Груп" на разных поцзициях. Мне очень интересна разработка и знание технических деталей, поэтому я поступаила в Яндекс Практикум на факультет Веб-разработки. На протяжении почти года мы изучали разные технологии, сделали 15 самостоятельных проектных работ. Перед Вами дипломная работа, для реализации которой применены все полученные знания.</p>
          <a className='about-me__github'target="_blank" rel="noreferrer" href='https://github.com/Iartseva'>Github</a>        
        </div>
        <img className='about-me__photo' src={photo} alt="фото студента"></img>
      </div>
      
    </section>
  );
}

export default AboutMe;
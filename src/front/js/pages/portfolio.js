import React from 'react';
import "../../styles/portfolio.css";
import pelicula1 from '../../img/pelicula1.jpg';
import pelicula2 from '../../img/pelicula2.jpg';
import pelicula3 from '../../img/pelicula3.jpg';

export const Portfolio = () => {
  return (
    <div className='container'>
      <div id='portfolio' className='project'>
        <div className='main-text' id='project'>
          <h2>Project <span>Movies4Geeks</span></h2>
          <div className='portfolio-content'>
            <div className='row mobile-frame'>
              <img src={pelicula1} alt="Movies4Geeks Project" />
            </div>
            <div className='row mobile-frame'>
              <img src={pelicula2} alt="Movies4Geeks Project" />
            </div>
            <div className='row mobile-frame'>
              <img src={pelicula3} alt="Movies4Geeks Project" />
            </div>
          </div>
          <div className='description'>
            <p>
              With a team of three developers, we created a feature-rich movie platform that allows users to comment on movies, rate them, read reviews, and watch trailers. 
              <span>Movies4Geeks</span> is your one-stop destination for everything related to movies!
              Do you want to visit it? <span>Check Here</span> <i class="fa-solid fa-arrow-right"></i>https://sample-service-name-rhm4.onrender.com/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


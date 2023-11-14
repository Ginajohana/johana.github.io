import React, { useState } from 'react';
import johanasemeniukImage from '../../img/johanasemeniuk.jpg';
import "../../styles/about.css";

export const About = () => {
  const [expandedServices, setExpandedServices] = useState([]);

  const handleReadMoreClick = (index) => {
    setExpandedServices((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className='about-container col-8'>
      <div className='about-content'>
        <div className='about-img'>
          <img src={johanasemeniukImage} alt="Johana Semeniuk" />
        </div>
        <div className='about-text'>
          <h2>About <span>Me</span></h2>
          <h3>Full Stack <span>Developer</span></h3>
          <h2>
            Hi, I'm Johana, a <span>passionate</span> Full Stack Developer. 
            I successfully completed a Full Stack Developer 
            bootcamp and remain <span>dedicated</span> to my professional growth.
          </h2>
        </div>
      </div>
      <div className='services'>
        <div className='container col-12 py-2'>
          <h1 className="services-title">My <span>Services</span></h1>
          <div className='services-list'>
            <div className={`service-item ${expandedServices[0] ? 'expanded' : ''}`}>
              <i className="fa-solid fa-code"></i>
              <h2>UI/UX Design</h2>
              <p>
                My goal is to create exceptional digital experiences for users.
                {expandedServices[0] && (
                  <>
                    <br />
                    For this reason, I decided to certify myself in basic aspects of user experience design, which I am currently continuing to develop.
                  </>
                )}
                <a href='#' className='read-more' onClick={() => handleReadMoreClick(0)}>
                  {expandedServices[0] ? 'Show less' : 'Learn more'}
                </a>
              </p>
            </div>
            <div className={`service-item ${expandedServices[1] ? 'expanded' : ''}`}>
            <i className="fa fa-check-circle"></i>
              <h2>QA Testing</h2>
              <p>
                Discover our other services. 
                {expandedServices[1] && (
                  <>
                    <br />
                    As a QA Tester, I am passionate about ensuring software quality and ensuring that each product meets the highest standards of excellence. 
                    My role goes beyond defect-finding; it focuses on creating impeccable user experiences to ensure customer satisfaction.
                    That's why I am currently certifying myself with ISTQB.
                  </>
                )}
                <a href='#' className='read-more' onClick={() => handleReadMoreClick(1)}>
                  {expandedServices[1] ? 'Show less' : 'Learn more'}
                </a>
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
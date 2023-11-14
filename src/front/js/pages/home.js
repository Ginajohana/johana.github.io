import React, { useContext, useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Context } from '../store/appContext';
import johanasemeniukImage from '../../img/johanasemeniuk.jpg';
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const el = useRef(null);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const changeText = () => {
    actions.setFullText();
  };

  const handleEmailIconClick = () => {
    setShowEmailPopup(true);
  };

  const closeEmailPopup = () => {
    setShowEmailPopup(false);
  };

  useEffect(() => {
    const options = {
      strings: [store.displayText],
      typeSpeed: 60,
    };

    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, [store.displayText]);

  return (
    <div className="Home">
      <div className='imagen-johana'>
        <div className="image-container">
          <img
            src={johanasemeniukImage}
            alt="Johana Semeniuk"
            className="responsive-image"
          />
        </div>
      </div>
      <div className="Home-content">
        <h3>Hello, it's Me</h3>
        <h1>Johana Semeniuk</h1>
        <h3>And I'm a <span className="text"><span ref={el}></span></span></h3>
        <p>I'm a passionate, up-and-coming full-stack developer. 
          While my experience may be limited, my enthusiasm and dedication drive me to learn
          and improve constantly.</p>
        
        <div className="home-sci">
          <a href="https://www.linkedin.com/in/johana-semeniuk-a5a28a290/"><i className="fab fa-linkedin"></i></a>
          <a href="https://wa.me/672223207"><i className="fab fa-whatsapp"></i></a>
          <i className="fas fa-envelope email-icon" onClick={handleEmailIconClick}></i>
        </div>

        {showEmailPopup && (
          <div className="email-popup">
            <p>My Email: <span>ginajohana94@gmail.com</span></p>
            <button onClick={closeEmailPopup}>Close</button>
          </div>
        )}  
    
        <a href="/about" className="btn-box" onClick={changeText}>More About Me</a>
      </div>
    </div>
  );
};
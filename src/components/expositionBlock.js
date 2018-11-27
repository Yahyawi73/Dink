import React from 'react';
import './style/exposition.css';
import Button from './styledComponents/Button';

function exposition() {
  return (
    <div className="exposition">
      <div className="exposition-first-section">
        <div className="first-image" />
        <div className="seconde-image">
          <p className="exposition-text">
            TOP 8 
            STREET STYLE TRENDS:
            <br /> SPRING 2018
          </p>
          <p className="soft-sun-expo">the soft sun collection essentials</p>
          <Button className="btn-exposition">VIEW THE TOP</Button>
          <div className="shop-now exposition-btn"><p>VIEW THE TOP</p></div>
        </div>
        <div className="third-image">
          <p className="last-news">LAST NEWS</p>
          <p className="who-has-taken">
            "WHO HAS TAKEN
            <br /> BYONCE'S CROWN"
          </p>
          <p className="it-time">
            IT's time "totally pause", as twenty
            <br />
            years after its cinematic release,
            <br /> clueless, the music has been
          </p>
          <p className="it-time date-time">26 JUNE 2016</p>
          <div className="slider-style third-image-slider">
            <ul>
              <li className="cercle-style " />
              <li className="cercle-style " />
              <li className="cercle-style " />
            </ul>
          </div>
        </div>

        <div className="forth-image">
          <div className="menu-text-icon">
            <p className="forth-item-text">USE HASHTAG AND SHOW YOUR STYLE</p>
            <ul>
              <li className="menu-icon">
                <img src='./assets/icons/facebook icon.svg' alt="facebook" />
              </li>
              <li className="menu-icon">
                <img src='./assets/icons/twitter icon.svg' alt="facebook" />
              </li>
              <li className="menu-icon">
                <img src='./assets/icons/google + icon.svg' alt="facebook" />
              </li>
              <li className="menu-icon">
                <img src='./assets/icons/instagram icon (1).svg' alt="facebook" />
              </li>
            </ul>
          </div>
        </div>

        <div className="fifth-image" />

        <div className="sixth-image">
          <div className="button-vers-top" />
        </div>
      </div>
    </div>
  );
}

export default exposition;

import React from 'react';
import '../../style/exposition.css';
import Button from '../../styledComponents/Button';
import Slider from '../../styledComponents/Slider';
import CercleDark from '../../styledComponents/CercleDark';
import Cercle from '../../styledComponents/Cercle';

const exposition = ({backgroundImage, secondSectionPub, description, SecondSectionParagraph,SecondSectionDetails, thirdSectionBackground, fifthImage, lastImage}) => {
  return (
    <div className="exposition">
      <div className="exposition-first-section">
        <div className="first-image" style={{backgroundImage: `url("${backgroundImage}")`}}/>
        <div className="seconde-image">
          <p className="exposition-text">
          {secondSectionPub}
          </p>
          <p className="soft-sun-expo">{description}</p>
          <Button className="btn-exposition">VIEW THE TOP</Button>
          <div className="shop-now exposition-btn"><p>VIEW THE TOP</p></div>
        </div>
        <div className="third-image" style={{background: `${thirdSectionBackground}`}}>
          <p className="last-news">LAST NEWS</p>
          <p className="who-has-taken">
            "{SecondSectionParagraph}"
          </p>
          <p className="it-time">
            {SecondSectionDetails}
          </p>
          <p className="it-time date-time">26 JUNE 2016</p>
          <Slider className="slider-style third-image-slider">
          <ul>
            <CercleDark />
            <Cercle />
            <Cercle />
          </ul>
        </Slider>
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

        <div className="fifth-image" style={{backgroundImage: `url("${fifthImage}")`}}/>

        <div className="sixth-image" style={{backgroundImage: `url("${lastImage}")`}}>
          <div className="button-vers-top" />
        </div>
      </div>
    </div>
  );
}

export default exposition;

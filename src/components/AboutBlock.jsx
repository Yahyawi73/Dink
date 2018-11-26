import React from 'react';
import './style/aboutStyle.css';

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">ABOUT DINK</div>
      <div className="about-paragraph">
        Online shop for unique, stylish lifestyle clothing, We are passionate
        about eco fashion, and every season sees us gathering around the drawing
        board at seaside to develop the exciting patterns, prints and styles you
        can see in our current collections. We look to places, color, animals
        for our inspiration.
      </div>
      <div className="more-info-block">
        <div className="more-info info-about">
          MORE INFO
          <span className="more-flech"> &nbsp; &#62; </span>
        </div>
      </div>
    </div>
  );
}

export default About;

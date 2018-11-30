import React from 'react';
import './style/ecoFriendly.css';
import Card from './items/card';
import chemise from './assets/chemise.png';
import hood from './assets/hood.png';
import chemiseBlanc from './assets/chemiseBlanc.png';
import classic from './assets/classic.png';

function ecoFriendly() {
  return (
    <div className="eco-friendly-block">
      <p className="eco-friendly-title">ECO FRIENDLY</p>
      <div className="eco-card-block">
        <Card
          text={'CLASSIC REGULAR SHORT SLEVE SHIRT'}
          subText={'Navy Palm Print'}
          price={'$70.00'}
          image={chemise}
          soldeExist={false}
        />
        <Card
          text={'CLASSIC COLLEGE HOODED ZIP SWEAT'}
          subText={'Navy'}
          price={'$130.00'}
          image={hood}
          soldeExist={false}
        />
        <Card
          text={'CLASSIC SLIM SHIRT'}
          subText={'BLUE / Off White'}
          price={'$120.00'}
          image={chemiseBlanc}
          soldeExist={false}
        />
        <Card
          text={'CLASSIC CHINO'}
          subText={'BLACK Unwashed'}
          price={'$80.00'}
          image={classic}
          soldeExist={false}
        />
      </div>
      <div className="slider-style eco-slider-style">
        <ul>
          <li className="cercle-style " />
          <li className="cercle-style " />
          <li className="cercle-style " />
        </ul>
      </div>
    </div>
  );
}

export default ecoFriendly;

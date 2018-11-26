import React from 'react';
import './style/daily.css';
import Card from './items/card';

function daily() {
  return (
    <div className="daily-block">
      <div className="daily-deals">DAILY DEALS</div>
      <div className="daily-menu">
        <ul>
          <li className="menu-text">FEATURED</li>
          <li className="menu-text">JEANS</li>
          <li className="menu-text">PANTS</li>
          <li className="menu-text">SHORTS</li>
          <li className="menu-text">TOPS</li>
          <li className="menu-text">OUTERWEAR</li>
          <li className="menu-text">ACCESSORIES</li>
          <li className="menu-text">COLLABORATIONS</li>
        </ul>
      </div>
      <div className="card-block">
        <Card
          text={'55 LONG SLEVE T-SHIRT'}
          subText={'BLACK'}
          price={'$50.00'}
          image={'./assets/T-shirt.png'}
          soldeExist={false}
        />
        <Card
          text={'BLITZ DOG SHIRT'}
          subText={'WHITE'}
          price={'$40.00'}
          image={'./assets/t-shirt blanc.png'}
          soldeExist={false}
        />
        <Card
          text={'ED-55 RELAXED TAPERED'}
          subText={'CS Compact Blue -Sonic Mid Used'}
          price={'$90.00'}
          image={'./assets/jeans.png'}
          soldeExist={true}
        />
        <Card
          text={'ALEXANDER BLINDER TYPE 3 T-SHIRT'}
          subText={'BLACK'}
          price={'$40.00'}
          image={'./assets/t-shirt black.png'}
          soldeExist={false}
        />
        <Card
          text={'ED-55 RELAXED TAPERED'}
          subText={'White Listed Indigo Selvage'}
          price={'$90.00'}
          image={'./assets/jeans-2.png'}
          soldeExist={false}
        />
        <Card
          text={'WHATCH CAP BEANIE'}
          subText={'Wine'}
          price={'$30.00'}
          image={'./assets/blueCap.png'}
          soldeExist={false}
        />
        <Card
          text={'WATCH CAP BEANIE'}
          subText={'Navy'}
          price={'$30.00'}
          image={'./assets/secondCap.png'}
          soldeExist={false}
        />
        <Card
          text={'ED-75 RELAXED TAPERED'}
          subText={'63 Rainbow Selvage - HR -5'}
          price={'$50.00'}
          image={'./assets/existJeans.png'}
          soldeExist={false}
        />
      </div>
      <div className="more-info-block">
        <div className="more-info-daily">
          MORE DEALS
          <span className="more-flech"> &nbsp; &#62; </span>
        </div>
      </div>
    </div>
  );
}

export default daily;

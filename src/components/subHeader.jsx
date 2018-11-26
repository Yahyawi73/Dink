import React from 'react';
import './style/withSubHeaderStyle.css';

const SubHeader = () => {
  return (
    <div className="subHeader">
      <div className="subHeader-menu">
        &#9776;
        <img className="menu-search" src='./assets/search icon.svg' alt="" />
      </div>
      <img className="dink-logo" src='/assets/Dink logo.svg' alt="Dink" />
      <div className="subHeader-right-menu">
        <img className="menu-user-icon" src='./assets/userIcon.svg' alt="" />
        <img className="menu-basket-icon" src='./assets/Fill 2.svg' alt="" />
      </div>
      <div className="select-block">
        <div className="SubHeader-select">
          <select>
            <option>WOMEN</option>
          </select>
        </div>

        <div className="SubHeader-select">
          <select>
            <option>MEN</option>
          </select>
        </div>

        <div className="SubHeader-select">
          <select>
            <option>KIDS</option>
          </select>
        </div>

        <div className="SubHeader-select">
          <select>
            <option>ACCESSOIRES</option>
          </select>
        </div>
      </div>

      <div className="subHeader-right-block">
        <div className="live">
          <span className="live-fitting">LIVE FITTING ROOM</span>
        </div>
        <div className="eco">
          <span className="eco-friendly">ECO</span>friendly
        </div>
        <img src='./assets/search icon.svg' alt="serch" />
      </div>
    </div>
  );
}

export default SubHeader;

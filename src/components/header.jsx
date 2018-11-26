import React from 'react';
import withHeaderStyle from './style/withHeaderStyle';

const Header = ({className}) => {
  return (
    <div className={className}>
      <select>
        <option>USA</option>
      </select>
      <div className="topnav-list">
        <ul>
          <li>
            <a href="#daily">DAILY DEALS</a>
          </li>
          <li>
            <a href="#gift">GIFT CARDS</a>
          </li>
          <li>
            <a href="#gift">SELL</a>
          </li>
          <li>
            <a href="#gift">HELP & CONTACT</a>
          </li>
        </ul>
      </div>
      <div className="topnav-right-side">
        <div className="login">
          <img src='/assets/userIcon.svg' alt="user icon" />
          <span className="text-header text-login">LOGIN</span>
        </div>
        <div className="basket">
          <img src='/assets/Fill 2.svg' alt="basket" />
          <div className="basket-info">
            <span className="dolar">$</span>
            <span className="total">1.023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withHeaderStyle(Header);

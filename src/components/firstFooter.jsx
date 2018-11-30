import React from 'react';
import './style/firstFooter.css';

function firstFooter() {
  return (
    <div className="footer">
      <div className="footer-about">
        <div className="footer-about-item">
          <p> Questions?</p>
          <ul>
            <li> Help </li>
            <li> Track Order </li>
            <li> Returns </li>
          </ul>
        </div>

        <div className="footer-about-item">
          <p> What's in Store?</p>
          <ul>
            <li> Help </li>
            <li> Track Order </li>
            <li> Returns </li>
          </ul>
        </div>

        <div className="footer-about-item">
          <p> Follow US</p>
          <ul>
            <li> Facebook </li>
            <li> Twitter </li>
            <li> Google+ </li>
            <li> Instagram </li>
          </ul>
        </div>

        <div className="footer-about-item">
          <p> More About </p>
          <ul>
            <li> Corporate Responsibility </li>
            <li> Jobs at DINK </li>
            <li> Investors </li>
            <li> As Seen On Screen </li>
          </ul>
        </div>

        <div className="footer-about-item">
          <p> More Sites</p>
          <ul>
            <li> Mobile and DINK apps</li>
            <li> Marketplace </li>
          </ul>
        </div>
      </div>

      <div className="footer-shopping">
        <div className="footer-shopping-select">
          <p> Shipping to:</p>
          <select>
            <option> USA </option>
          </select>
        </div>
     <div className="footer-bank-carte">
          <img src="./assets/cards icons.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default firstFooter;

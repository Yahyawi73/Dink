import React from 'react';
import './style/delivery.css';
import Sticker from './styledComponents/PromotionSticker';

function delivery() {
  return (
    <div className="delivery-block">
      <img className="delivery-image-locator" src={'./assets/Fill 5.svg'} alt="" />
      <div className="block-text">
        FREE DELIVERY WORLDWIDE
        <div className="more-info">
          MORE INFO
          <span className="more-flech"> &nbsp; &#62; </span>
        </div>
        <Sticker className="delivery-sticker">MORE</Sticker>
      </div>

      <img className="delivery-image-flag" src={'./assets/Fill 4.svg'} alt="" />
    </div>
  );
}

export default delivery;
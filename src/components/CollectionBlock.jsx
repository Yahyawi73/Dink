import React from 'react';
import'./style/collection.css';

//styled component 
import Button from './styledComponents/Button';
import Slider from './styledComponents/Slider';
import CercleDark from './styledComponents/CercleDark';
import Cercle from './styledComponents/Cercle';
import PromotionSticker from './styledComponents/PromotionSticker';

const Collection = () => {
  return (
    <div className='collection'>
      <div className="first-section">
        <div className="back-block">
          <p className="back-text">SUNWASHED SHADES <br /> OF SUMMER</p>
          <p className="back-text soft-sun">the soft sun collection essentials</p>
          <Button><p className="btn-content">VIEW THE SELECTION</p></Button>
        </div>
        <div className="man-women-block">
          <div className="women-img">
            <div className="shop-container">
              <p className="shop">shop</p>
              <p className="shop gendre">WOMEN</p>
            </div>
          </div>
          <div className="man-img">
            <div className="shop-container">
              <p className="shop">shop</p>
              <p className="shop gendre">MEN</p>
            </div>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="collection- item">
          <PromotionSticker> -50% </PromotionSticker>
          <img src='./assets/Bitmap.png' alt="" />
          <div className="description ">
            <div className="description-title"> light cabardine<br/> shirt</div>
            <div className="description-oldPrix"> $ 100.00</div>
            <div className="description-prix"> $ 70.00</div>
          </div>
          <Slider className="collection-slider">
          <ul>
            <CercleDark />
            <Cercle />
            <Cercle />
          </ul>
        </Slider>
        </div>
     
      </div>
      <div className="third-section">
        <img src='./assets/Oval 4.svg' alt="oval" />
        <p className="collection-title">DIVE INTO SUMMER</p>
        <p className="collection-soutitle">
          WITH THE SPRING/SUMMER 2016 COLLECTION FO KIDS
        </p>
      </div>
    </div>
  );
}

export default Collection;

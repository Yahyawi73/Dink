
import React from 'react';
import './card.css';
import PromotionSticker from '../styledComponents/PromotionSticker';


function card({image, text, subText, price, soldeExist}){
  return(
<div className="card">
{soldeExist && <PromotionSticker className="promotion-card">-30%</PromotionSticker>}
  <div className="card-mark"> 
    <div className="landmark">  
      <img src={image} alt=""></img>
    </div>
  </div>
  <div className="card-title">
    <p>
       {text}
    </p>
  </div>
  <div className="card-details">
    <p className="details-color">{subText}</p>
  </div>
  <div className="card-price">
      <p className="price">{price}</p>
  </div>
</div>
  )
}

export default card;
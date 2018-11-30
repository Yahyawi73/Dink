
import React from 'react';
import PromotionSticker from '../../styledComponents/PromotionSticker';
import withStyle from './CardStyle';

const card = ({image, text, subText, price, soldeExist, className, color, width, background}) => {
  return(
<div className={className} style={{width :  `${width}`, background: `${background}`}}>
{soldeExist && <PromotionSticker className="promotion-card">-30%</PromotionSticker>}
  <div className="card-mark"> 
    <div className="landmark">  
      <img src={image} alt=""></img>
    </div>
  </div>
  <div className="card-title">
    <p style={{ color: `${color}`}}>
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

export default withStyle(card);
import React from 'react';
import withPromotionStyle from './style/withPromotionStyle';


const Promotion = ({className}) => {
  return (
    <div className={className}>
      <div className="promotion-block">
        <div className="promotion-text-field">
          10% STUDENT DISCOUNT<span className="more-flech"> &nbsp; &#62; </span>
        </div>
      </div>
      <div className="promotion-block">
        <div className="promotion-text-field">
          $-9.95- UNLIMITED NEXT DAY DELIVERY FOR YEAR{' '}
          <span className="more-flech"> &nbsp; &#62; </span>
        </div>
      </div>
      <div className="promotion-block">
        <div className="promotion-text-field">
          FREE DELIVERY WORLDWIDE
          <span className="more-flech"> &nbsp; &#62; </span>
        </div>
      </div>
    </div>
  );
}

export default withPromotionStyle(Promotion);
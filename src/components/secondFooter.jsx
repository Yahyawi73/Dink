import React from 'react';
import withSecondFooteStyled from './style/withSecondFooteStyled';

const SecondFooter = ({className}) => {
  return (
    <div className={className}>
      <div className="footer-list">
        <ul>
          <li>
            {' '}
            <h4> PRIVACY & COOKIES </h4>{' '}
          </li>
          <li>
            {' '}
            <h4> TERMS & CONDITIONS </h4>
          </li>
          <li>
            {' '}
            <h4> STORE DIRECTORY </h4>
          </li>
          <li>
            {' '}
            <h4> ABOUT US </h4>
          </li>
        </ul>
      </div>
      <div className="description">
        <p>
          The celebrities named or featured on have not endorsed recommended or
          approved
        </p>
      </div>
    </div>
  );
}

export default withSecondFooteStyled(SecondFooter);

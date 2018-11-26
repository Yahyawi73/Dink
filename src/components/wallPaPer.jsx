import React from 'react';
import withWallPaPerStyle from './style/withWallPaPerStyle';

const WallPaper = ({className}) => {
  return (
    <div className={className}>
      <div className="section">
        <div className="wallpaper-text-field">
          pop riot <br /> is a style explosion
          <br /> f/w '16
        </div>
      </div>
      <div className="section">
        <div className="wallpaper-text-field-active">
          fall winter '16 preview denim <div className="select-selector" />
          <div className="shop-now"><p>SHOP NOW</p></div>
        </div>
    </div>
      <div className="section">
        <div className="wallpaper-text-field">
          #denimeye
          <br /> on
          <br /> tour
        </div>
      </div>
      <div className="section">
        <div className="wallpaper-text-field">
          kids <br />
          collection <br />
          f/w '16
        </div>
      </div>
    </div>
  );
}

export default withWallPaPerStyle(WallPaper);

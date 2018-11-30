import React from 'react';
import withWallPaPerStyle from './style/withWallPaPerStyle';
import Slider from './styledComponents/Slider';
import CercleDark from './styledComponents/CercleDark';
import Cercle from './styledComponents/Cercle';

const WallPaper = ({ className }) => (
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
        <Slider className="wallpaper-slider">
          <ul>
            <CercleDark />
            <Cercle />
            <Cercle />
            <Cercle />
          </ul>
        </Slider>
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

export default withWallPaPerStyle(WallPaper);

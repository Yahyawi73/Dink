import React from 'react';
import withWallPaPerStyle from '../../style/withWallPaPerStyle';
import Slider from '../../styledComponents/Slider';
import CercleDark from '../../styledComponents/CercleDark';
import Cercle from '../../styledComponents/Cercle';

const WallPaper = ({className}) => {
  return (
    <div className={className}>
      <div className="section" style={{ width: "33%" }}>
        <div className="wallpaper-text-field-active">
          pop riot <br /> is a style explosion
          <br /> f/w '16
          <div className="select-selector" />
        </div>

      </div>
      <div className="section" style={{ width: "33%" }}>
        <div className="wallpaper-text-field">
          fall winter '16 preview denim 
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
      <div className="section" style={{ width: "33%" }}>
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
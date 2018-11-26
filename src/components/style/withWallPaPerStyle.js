import styled from 'styled-components';

export default (Component) => styled(Component)`
min-height: 645.41px;
background-image: url("../assets/Slider\ pic.png");
background-size: cover;
background-position: top;
position: relative;
display: flex;
}

.select-selector {
width: 93%;
position: relative;
right: 40px;
height: 15px;
background-color: #FFFFFF;
margin-top: 68px;
top: -21px;
}

.section {
text-transform: uppercase;
width: 25%;
border-right: 1px solid #FFFFFF;
position: relative;
min-height: 150px;
}

.wallpaper-text-field {
margin-left: 38px;
opacity: 0.5;
color: #FFFFFF;
font-size: 30px;
letter-spacing: 0.4px;
line-height: 30px;
font-weight: bold;
position: absolute;
bottom: 0;
left: 0;
margin-bottom: 47px;
}

.shop-now {
display: none;
}

.wallpaper-text-field-active {
margin-right: 100px;
margin-left: 40px;
color: white;
font-size: 30px;
letter-spacing: 0.4px;
line-height: 30px;
font-weight: bold;
position: absolute;
bottom: -24px;
left: 0;
}

@media only screen and (max-width: 780px) {
  min-height: 769.41px;
  background-position: 8%;

.section:nth-child(1)  {
  display: none;
}

.section:nth-child(2)  {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.wallpaper-text-field-active {
  width: 43%;
  font-size: 36px;    
  font-weight: bold;
  line-height: 44px;
  position: relative;
  bottom: 39px;
  left: 40px;
}
.select-selector {
  display: none;
}

.section:nth-child(3)  {
  display: none;
}

.section:nth-child(4)  {
  display: none;
}
.section:nth-child(1)

.promotion-block-side {
  display: none;
}

.promotion-block-middle {
  width: 100%;
}




.shop-now {
  display: block;
  color: #FFFFFF;
  height: 40px;
  width: 180px;
  border: 2px solid #FFFFFF;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 44px;
  position: relative;
  top: 38px;
  right: -63px;
}

.shop-now p {
  margin: auto;
  display: flex;
  justify-content: center;
}
}

@media only screen and (max-width: 650px) {
  min-height: 899.41px;
  background-position: 18%
.wallpaper-text-field-active {
width: 52%;
bottom: 65px;
left: 40px;
}

.shop-now {
top: 56px;
}
}
`;

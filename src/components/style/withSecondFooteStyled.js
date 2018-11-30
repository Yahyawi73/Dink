import styled from 'styled-components';

export default (Component) => styled(Component)`
  background-color: #1E2226;
  height: 137px;
  width: 100%;
  text-align: center;

.footer-list {
  padding-top: 1%;
}

.footer-list ul {
  margin-top: 10px;
  position: relative;
  right: 5px;
}

.footer-list ul li {
  display: inline-block;
  margin-right: 29px;
}

.footer-list ul li h4 {
  font-size: 12px;
  color: #FFFFFF;
  letter-spacing: 0.2px;
  font-weight: 400;
}

 .description {
  color: #737373;
  font-size: 10px;
  letter-spacing: 0.17px;
  line-height: 24px;
}

 .description p{
  margin-top: -22px;
}

.footer-icon {
  opacity: 0.5;
  margin-top: 10px;
  width: 229px;
  margin-left: 630px;
}

.footer-icon img {
  margin-right: 46px;
}

@media only screen and (max-width: 780px) {
  .footer-list {
    padding-top: 21px;
  }
  .footer-list ul {
    margin-left: -15px;
    margin-top: 0px;
  }
}

@media only screen and (max-width: 650px) {
.footer-shopping {
  margin-top: -4px;
}
.footer-list {
  padding-top: 36px;
}
.footer-list ul {
  margin-left: 0px;
  margin-top: 0px;
}
}
`;

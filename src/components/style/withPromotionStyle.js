
import styled from 'styled-components';

export default (Component) => styled(Component)`
  display: flex;
  height: 41px;
  width: 100%;
.promotion-block {
  background-color: #282E33;
  width: 33%;
  color: #C0C5CA;
.promotion-text-field {
  color: #C0C5CA;
  font-size: 12px;
  letter-spacing: 0.2px;
  line-height: 15px;
  text-align: center;
  margin-top: 14px;
  font-weight: 500;
  margin-left: 11px;
}

}

.promotion-block:nth-child(2) {
  background-color: #1E2226;
  width: 34%;
  color: #C0C5CA;

}

.promotion-block:nth-child(2) .promotion-text-field {
  margin-left: -8px;
  margin-top: 15px;
}

.promotion-block:nth-child(3) .promotion-text-field {
  margin-left: -5px;
  margin-top: 16px;
}


@media only screen and (max-width: 780px) {
  .promotion-block:nth-child(1) {
    display: none;
  }
  .promotion-block:nth-child(2) {
    width: 100%;
  }
  .promotion-block:nth-child(3) {
    display: none;
  }
}
`;

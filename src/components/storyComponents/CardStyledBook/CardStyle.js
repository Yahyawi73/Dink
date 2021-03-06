import styled from 'styled-components';

export default (Component) => styled(Component)`
    height: 354px;
    width: 322px;
    background:  #fff;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    margin-right: 25px;
    border: 1px solid #E8E8E8;
    margin-top: 20px;
  }
  
  .card-mark {
    padding-top: 5px;
    overflow: hidden;
    justify-content: center;
    display: flex;
    min-height: 216px;
    height: 20%;
  }
  
  .landmark img {
    height: 145px;
      margin-top: 29px;
  } 
  
  .card-title {
    height: 36px;
    color: #1E2226;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 17px;
  }
  
  .price {
    list-style-type: none;
    text-align: center;
    color: #1366DA;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: 500;
  }
  
  .card-details {
    color: #bfbfbf;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align: center;
  }
  
  
  .details-color {
    color: #C6C6C6;
    font-family: Montserrat;
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 18px;
    text-align: center;
    margin-top: -18px;
    margin-bottom: 0px;
  } 
  
  .card-solde {
    background-color: #EB3D15;
    position: relative;
    top: -2%;
    left: 115%;
  }
  
  .card-price ul {
    margin-top: 0;
  }
  
  `;
import styled from 'styled-components';

export default (Component) => styled(Component)`
  display: flex;
  background: #F3F3F3;
  font-size: 12px;
 select {
  margin-left: 38px;
  background: #F3F3F3;
  border: none;
  font-weight: 600;
  margin-right: 8px;
}

.topnav-list ul {
  display: flex;
  list-style-type: none;
  padding-left: 20px;
  padding-top: 1px;
}
.topnav-list ul li a {
  color: #B3B3B3;
  margin-right: 30px;
  text-decoration: none;
  font-weight: 500;
}

.topnav-right-side {
  margin-left: auto;
  display: flex;
}

.login {
  padding-top: 12px;
  color: #737373;

  letter-spacing: 0.8px;
  line-height: 15px;
  margin-right: 54px;
}

.login img {
  padding-right: 15px;
}

.basket {
  padding: 12px 0;
  background-color: #DEDEDE;
  color: #737373;
  font-weight: 500;
  width: 180px;
  display: flex;
  img {
    padding-left: 51px;
    padding-right: 17px;
  }
  .dolar {
    margin-right: 7px;
    
  }

}

@media only screen and (max-width: 850px) {
  .basket {
    width: 152px;
  }
}

@media only screen and (max-width: 780px) {
    display: none;
}

`;



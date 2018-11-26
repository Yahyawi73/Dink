import React, { Component } from 'react';
import Header from './components/header';
import SubHeader from './components/subHeader';
import PromotionBlock from './components/promotionBlock';
import WallPaper from './components/wallPaPer';
import Collection from './components/CollectionBlock';
import Delivery from './components/deliveryBlock';
import Daily from './components/dailyDeals';
import EcoFriendly from './components/ecoFriendly';
import Exposition from './components/expositionBlock';
import About from './components/AboutBlock';
import Footer from './components/firstFooter';
import SecondFooter from './components/secondFooter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <PromotionBlock />
        <WallPaper />
        <Collection />
        <Delivery />
        <Daily />
        <EcoFriendly />
        <Exposition />
        <About />
        <Footer />
        <SecondFooter />
      </div>
    );
  }
}

export default App;

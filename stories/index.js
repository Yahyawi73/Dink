import React from 'react';
import { storiesOf } from '@storybook/react';

import Promotion from '../src/components/promotionBlock';


storiesOf('Button', module)
 .add('with text', () => <button>Hello Button</button>)
 .add('with some emoji', () => (
   <button>
     <span role="img" aria-label="so cool">
       :grinning: :sunglasses: :+1: :100:
     </span>
   </button>
 ));



//  storiesOf("Header", module)
//  .add("Header", () => <Header />,{
//   notes: 'A Header component',
//  })
//  ;

 storiesOf("Promotion", module)
 .add("Promotion", () => <Promotion />,{
  notes: 'A Promotion component',
 })
 ;

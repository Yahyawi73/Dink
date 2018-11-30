import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withInfo } from '@storybook/addon-info';
import PropTypes from 'prop-types';

import Promotion from '../src/components/promotionBlock';

import Header from '../src/components/header';
import HeaderA from '../src/components/storyComponents/header/headerA';

import WallPaper from '../src/components/wallPaPer';
import WallPaperA from '../src/components/storyComponents/walPaper/walpaper';

import Exposition from '../src/components/expositionBlock';
import ExpositionA from '../src/components/storyComponents/exposition/ExpositionA';

import SecondFooter from '../src/components/secondFooter';
import FirstFooter from '../src/components/firstFooter';
import EcoFriendly from '../src/components/ecoFriendly';

import Card from '../src/components/storyComponents/CardStyledBook/Card';
import CardLoader from '../src/components/storyComponents/CardStyledBook/CardLoader'

import Collection from '../src/components/CollectionBlock';
import DailyDeals from '../src/components/dailyDeals';

storiesOf('Header', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .addDecorator(withInfo)
  .add('Header', () => <Header />, {
    notes: 'A Header component',
  })
  .add('HeaderA', () => <HeaderA />, {
    notes: 'A Header component',
  });
storiesOf('Promotion', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('Promotion', () => <Promotion />, {
    notes: 'A Promotion component',
  });
storiesOf('WallPaper', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('WallPaper', () => <WallPaper />, {
    notes: 'A WallPaper component',
  });
storiesOf('WallPaper', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .addDecorator(withInfo)
  .add('WallPaper', () => <WallPaper />, {
    notes: 'A WallPaper component',
  })
  .add('WallPaperA', () => <WallPaperA />, {
    notes: 'A WallPaper component',
  });
storiesOf('SecondFooter', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('SecondFooter', () => <SecondFooter />, {
    notes: 'A SecondFooter component',
  });
storiesOf('FirstFooter', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('FirstFooter', () => <FirstFooter />, {
    notes: 'A FirstFooter component',
  });
storiesOf('EcoFriendly', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('EcoFriendly', () => <EcoFriendly />, {
    notes: 'A EcoFriendly component',
  });
storiesOf('DailyDeals', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .add('DailyDeals', () => <DailyDeals />, {
    notes: 'A DailyDeals component',
  });
storiesOf('Card', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .addParameters({
    info: {
    // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
      text: `
      Card 

      ~~~js
      text={cardText}
      subText={subText}
      price={price}
      image={image}
      soldeExist={soldeExist}
      color={color}
      width={width}
      background={backgroundColor}
    />
      ~~~
    `,
    },
  })
  .addDecorator(withInfo)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Card', () => {
    const image = text('image', './assets/chemiseBlanc.png');
    const cardText = text('cardText', 'CLASSIC CHINO');
    const subText = text('subText', 'BLACK Unwashed');
    const price = text('price', '$80.00');
    const soldeExist = text('soldeExist', false);
    const color = text('color', 'black');
    const width = text('width', '322');
    const backgroundColor = text('Background Color', ' #fff');
    return (
      <Card
        text={cardText}
        subText={subText}
        price={price}
        image={image}
        soldeExist={soldeExist}
        color={color}
        width={width}
        background={backgroundColor}
      />
    );
  })
  .add('CardLoader', () => <CardLoader />);

storiesOf('Exposition', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .addDecorator(withInfo)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('Exposition', () => <Exposition />, {
    notes: 'A Exposition component',
  })
  .add('ExpositionA', () => {
    const backgroundImage = text('First Section Background Image:', '/assets/modelAdidas.jpg');
    const secondSectionPub = text('Second Section Pub', 'Top Style');
    const description = text('Description', 'new article');
    const SecondSectionParagraph = text('Second Section Paragraph', '');
    const SecondSectionDetails = text('Second Section Details', '');
    const thirdSectionBackground = text('Third Section Background:', 'black');
    const fifthImage = text('Third Section Background:', '/assets/BootsAdidas.jpg');
    const lastImage = text('Last Section Background Image:', '/assets/MessiAdidas.jpg');
    return (
      <ExpositionA
        backgroundImage={backgroundImage}
        secondSectionPub={secondSectionPub}
        description={description}
        SecondSectionParagraph={SecondSectionParagraph}
        SecondSectionDetails={SecondSectionDetails}
        thirdSectionBackground={thirdSectionBackground}
        fifthImage={fifthImage}
        lastImage={lastImage}
      />
    );
  }, {
    notes: 'A Exposition component',
  });
storiesOf('Collection', module)
  .addParameters({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
  .addDecorator(withInfo)
  .add('Collection', () => <Collection />, {
    notes: 'A Collection component',
  });

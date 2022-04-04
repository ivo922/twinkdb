import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import StatsCalculator from '../components/StatsCalculator';

function Calculator() {
  const images = {
    heading: {
      src: require('../assets/images/calculator.png'),
      alt: 'Calculator',
    },
  };

  return (
    <main className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Calculator"
        />

        <hr />

        <StatsCalculator />
      </div>
    </main>
  );
}

export default Calculator;

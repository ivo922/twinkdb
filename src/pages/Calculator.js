import React, { useEffect } from 'react';

import TitleWithImage from '../components/TitleWithImage';
import StatsCalculator from '../components/StatsCalculator';

function Calculator() {
  const images = {
    heading: {
      src: require('../assets/images/calculator.png'),
      alt: 'Calculator',
    },
  };

  useEffect(() => {
    document.title = 'TwinkDB - Stats Calculator';
  }, []);

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

        <p style={{ textAlign: 'center' }}>
          <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTvT2yKMI9I5VZxcSsZxoeM4JtdhHkGP64iU2L2TACktSsTL7ZHdOcJfgfgCr8f4psp-NTBR7ZYOCYW/pubhtml#">
            Base stats for different races.
          </a>
        </p>
      </div>
    </main>
  );
}

export default Calculator;

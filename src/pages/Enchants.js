import React, { useEffect } from 'react';

import TitleWithImage from '../components/TitleWithImage';
import TablesList from '../components/TablesList';

import routes from '../routes';

function Enchants(props) {
  const images = {
    heading: {
      src: require('../assets/images/enchant.png'),
      alt: 'Enchants',
    },
  };

  useEffect(() => {
    document.title = 'TwinkDB - Enchants';
  }, []);

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Enchants"
        />

        <hr />

        <p>
          Enchants spreadsheet by Swoops:{' '}
          <a href={routes.enchantsSpreadsheet} target="_blank" rel="noreferrer">
            <strong>HERE</strong>
          </a>
          (a few are incorrect) <br />
          Values in brackets are scaled stats at level 29. E.g. +3(5) means +3
          at 20 &amp; +5 at 29.
        </p>
        <hr />

        <TablesList data={props.data.categories} />
      </div>
    </div>
  );
}

export default Enchants;

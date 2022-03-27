import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import TablesList from '../components/TablesList';

function Trinkets(props) {
  const images = {
    heading: {
      src: require('../assets/images/trinket.png'),
      alt: 'Trinkets',
    },
  };

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Trinkets"
        />

        <hr />

        <TablesList data={props.data.categories} />
      </div>
    </div>
  );
}

export default Trinkets;

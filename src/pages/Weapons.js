import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import LegendRarity from '../components/LegendRarity';
import LegendSorting from '../components/LegendSorting';
import TablesList from '../components/TablesList';

function Weapons(props) {
  const images = {
    heading: {
      src: require('../assets/images/weapon.png'),
      alt: 'Weapons',
    },
  };

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Weapons"
        />

        <hr />

        <LegendRarity />

        <LegendSorting />

        <TablesList data={props.data.categories} />
      </div>
    </div>
  );
}

export default Weapons;

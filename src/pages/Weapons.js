import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import TablesList from '../components/TablesList';

function Weapons(props) {
  const images = {
    heading: {
      src: require('../assets/images/weapon.png'),
      alt: 'Weapons',
    },
  };

  console.log(props.data.categories);

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Weapons"
        />

        <hr />

        <TablesList data={props.data.categories} />
      </div>
    </div>
  );
}

export default Weapons;

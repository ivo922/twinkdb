import React, { useEffect } from 'react';

import TitleWithImage from '../components/TitleWithImage';
import { NavLink, Outlet } from 'react-router-dom';
import LegendCooldown from '../components/LegendCooldown';

function Consumables(props) {
  const images = {
    heading: {
      src: require('../assets/images/consumable.png'),
      alt: 'Consumables',
    },
  };

  useEffect(() => {
    document.title = 'TwinkDB - Consumables';
  }, []);

  const tabLinks = props.data.types.map((type, index) => {
    return (
      <li key={type.name}>
        <NavLink to={type.name.toLowerCase()}>{type.name}</NavLink>
      </li>
    );
  });

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Consumables"
        />

        <hr />

        <LegendCooldown />

        <div className="tabs">
          <div className="tabs__head">
            <div className="tabs__nav">
              <ul>{tabLinks}</ul>
            </div>
          </div>

          <div className="tabs__body">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consumables;

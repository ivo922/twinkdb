import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import LegendRarity from '../components/LegendRarity';
import { Outlet, NavLink } from 'react-router-dom';

function Armor(props) {
  const images = {
    heading: require('../assets/images/armor.png'),
  };

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
          imageUrl={images.heading}
          imageAlt="Armor"
          title="Armor"
        />

        <hr />

        <LegendRarity />

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

export default Armor;

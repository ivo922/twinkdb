import React from 'react';

import BuildsData from '../DB/builds.json';

import TitleWithImage from '../components/TitleWithImage';
import BuildsFilters from '../components/BuildsFilters';
import BuildsClass from './BuildsClass';

import './BuildsList.css';

function BuildsList() {
  const images = {
    heading: {
      src: require('../assets/images/builds.png'),
      alt: 'Builds',
    },
  };

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Builds"
        />

        <hr />

        <BuildsFilters />

        <hr />

        <div className="build-items-container">
          {BuildsData.classes.map((cls, index) => {
            return <BuildsClass cls={cls} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BuildsList;

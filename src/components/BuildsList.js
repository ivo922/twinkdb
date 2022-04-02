import React, { useState } from 'react';

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

  const [filters, setFilters] = useState({
    deathknight: true,
    demonhunter: true,
    druid: true,
    hunter: true,
    mage: true,
    monk: true,
    paladin: true,
    priest: true,
    rogue: true,
    shaman: true,
    warlock: true,
    warrior: true,
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, ...filter };
    });
  };

  const checkAll = () => {
    setFilters((prevFilters) => {
      const filtered = Object.entries({ ...prevFilters }).map((filter) => {
        filter[1] = true;
        return filter;
      });

      return { ...prevFilters, ...Object.fromEntries(filtered) };
    });
  };

  const uncheckAll = () => {
    setFilters((prevFilters) => {
      const filtered = Object.entries({ ...prevFilters }).map((filter) => {
        filter[1] = false;
        return filter;
      });

      return { ...prevFilters, ...Object.fromEntries(filtered) };
    });
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

        <BuildsFilters
          handleFilterChange={handleFilterChange}
          checkAll={checkAll}
          uncheckAll={uncheckAll}
          filters={filters}
        />

        <hr />

        <div className="BuildsList">
          {BuildsData.classes.map((cls, index) => {
            if (filters[cls.name_handle]) {
              return <BuildsClass cls={cls} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default BuildsList;

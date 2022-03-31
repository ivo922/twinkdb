import React from 'react';

import BuildsData from '../DB/builds.json';

import BuildsFilter from './BuildsFilter';

import './BuildsFilters.css';

function BuildsFilters() {
  const classesHandles = BuildsData.classes.map((cls) => {
    return cls.name_handle;
  });

  return (
    <div className="builds-filter">
      <h2 className="builds-filter__title">Filter by class</h2>

      <div className="builds-filter__actions">
        <a href="#" className="builds-filter__btn" data-checked="true">
          Check All
        </a>

        <a href="#" className="builds-filter__btn" data-checked="false">
          Uncheck All
        </a>
      </div>

      {classesHandles.map((cls, index) => {
        return <BuildsFilter class={cls} key={index} />;
      })}
    </div>
  );
}

export default BuildsFilters;

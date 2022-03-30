import React from 'react';
import BuildsFilter from './BuildsFilter';

import './BuildsFilters.css';

function BuildsFilters(props) {
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

      {props.classes.map((cls, index) => {
        return <BuildsFilter class={cls} key={index} />;
      })}
    </div>
  );
}

export default BuildsFilters;

import React from 'react';

import BuildsData from '../DB/builds.json';

import BuildsFilter from './BuildsFilter';

import './BuildsFilters.scss';

function BuildsFilters(props) {
  const classesHandles = BuildsData.classes.map((cls) => {
    return cls.name_handle;
  });

  const handleCheckAllClick = (event) => {
    event.preventDefault();

    props.checkAll();
  };

  const handleUncheckAllClick = (event) => {
    event.preventDefault();

    props.uncheckAll();
  };

  return (
    <div className="BuildsFilters">
      <h2 className="BuildsFilters__title">Filter by class</h2>

      <div className="BuildsFilters__actions">
        <a
          href="#"
          className="BuildsFilters__btn"
          data-checked="true"
          onClick={handleCheckAllClick}
        >
          Check All
        </a>

        <a
          href="#"
          className="BuildsFilters__btn"
          data-checked="false"
          onClick={handleUncheckAllClick}
        >
          Uncheck All
        </a>
      </div>

      {classesHandles.map((handle, index) => {
        return (
          <BuildsFilter
            class={handle}
            key={index}
            handleFilterChange={props.handleFilterChange}
            checked={props.filters[handle]}
          />
        );
      })}
    </div>
  );
}

export default BuildsFilters;

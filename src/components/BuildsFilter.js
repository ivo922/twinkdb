import React, { useState } from 'react';

import './BuildsFilter.scss';

function BuildsFilter(props) {
  const image = require(`../assets/images/classes/class-${props.class}.png`);

  const handleChange = (event) => {
    const _filter = {};
    _filter[props.class] = event.target.checked;

    props.handleFilterChange(_filter);
  };

  return (
    <div className="BuildsFilter">
      <input
        type="checkbox"
        name={`filter-${props.class}`}
        id={`filter-${props.class}`}
        onChange={handleChange}
        checked={props.checked}
      />

      <label htmlFor={`filter-${props.class}`}>
        <img src={image} alt={props.class} />
      </label>
    </div>
  );
}

export default BuildsFilter;

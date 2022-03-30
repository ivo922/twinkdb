import React, { useState } from 'react';

function BuildsFilter(props) {
  const image = require(`../assets/images/classes/class-${props.class}.png`);

  return (
    <div
      className="builds-filter__item js-builds-filter"
      data-type={props.class}
    >
      <input
        type="checkbox"
        name={`filter-${props.class}`}
        id={`filter-${props.class}`}
      />

      <label htmlFor={`filter-${props.class}`}>
        <img
          src={image}
          alt={props.class}
        />
      </label>
    </div>
  );
}

export default BuildsFilter;

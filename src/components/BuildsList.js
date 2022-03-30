import React from 'react';
import BuildsClass from './BuildsClass';

import './BuildsList.css';

function BuildsList(props) {
  return (
    <div className="build-items-container">
      {props.classes.map((cls, index) => {
        return <BuildsClass cls={cls} key={index} />;
      })}
    </div>
  );
}

export default BuildsList;

import React from 'react';
import BuildsItem from './BuildsItem';

import './BuildsClass.scss';

function BuildsClass(props) {
  const images = {
    heading: {
      src: require(`../assets/images/classes/class-${props.cls.name_handle}.png`),
      alt: props.cls.name,
    },
  };

  const head = () => {
    return (
      <div className="BuildsClass__head">
        <div className="BuildsClass__image">
          <img src={images.heading.src} alt={images.heading.alt} />
        </div>

        <h3 className="BuildsClass__title">{props.cls.name}</h3>
      </div>
    );
  };

  const body = () => {
    if (props.cls.builds.length > 0) {
      return (
        <div className="BuildsClass__body">
          {props.cls.builds.map((build, index) => {
            return <BuildsItem build={build} key={index} />;
          })}
        </div>
      );
    }
  };

  return (
    <div className="BuildsClass" data-class={props.cls.name_handle}>
      {head()}

      <hr />

      {body()}
    </div>
  );
}

export default BuildsClass;

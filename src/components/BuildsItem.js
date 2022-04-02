import React from 'react';
import { Link } from 'react-router-dom';

import './BuildsItem.scss';

function BuildsItem(props) {
  const images = {
    spec: {
      src: require(`../assets/images/classes/class-${props.build.class_handle}-${props.build.spec_handle}.png`),
      alt: `${props.build.class_handle} ${props.build.spec_handle}`,
    },
  };

  return (
    <div className="BuildsItem" data-type={props.build.type}>
      <Link
        to={`${props.build.class_handle}/${props.build.id}`}
        className="BuildsItem__anchor"
      />

      <div className="BuildsItem__image">
        <img src={images.spec.src} alt={images.spec.alt} />
      </div>

      <div className="BuildsItem__content">
        <h4 className="BuildsItem__title">{props.build.title}</h4>

        <div className="BuildsItem__author">Author: {props.build.author}</div>

        <div className="BuildsItem__stats">
          Stat priority: {props.build.stat_priority}
        </div>
      </div>
    </div>
  );
}

export default BuildsItem;

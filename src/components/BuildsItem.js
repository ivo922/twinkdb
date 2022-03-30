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
    <div className="build-item" data-type={props.build.type}>
      {/* // TODO: link */}
      <a
        href="/20/builds.html?build={{this.class_handle}}:{{this.id}}"
        className="build-item__anchor js-build-switch"
        data-target="build"
        data-class="{{this.class_handle}}"
        data-id="{{this.id}}"
      ></a>
      {/* // TODO: end */}

      <div className="build-item__image">
        <img src={images.spec.src} alt={images.spec.alt} />
      </div>

      <div className="build-item__content">
        <h4 className="build-item__title">{props.build.title}</h4>

        <div className="build-item__author">Author: {props.build.author}</div>

        <div className="build-item__stats">
          Stat priority: {props.build.stat_priority}
        </div>
      </div>
    </div>
  );
}

export default BuildsItem;

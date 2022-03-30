import React from 'react';

import TitleWithImage from '../components/TitleWithImage';
import BuildsFilters from '../components/BuildsFilters';
import BuildsList from '../components/BuildsList';

function Builds(props) {
  const images = {
    heading: {
      src: require('../assets/images/builds.png'),
      alt: 'Builds',
    },
  };

  const classesHandles = props.data.classes.map((cls) => {
    return cls.name_handle;
  });

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Builds"
        />

        <hr />

        <BuildsFilters classes={classesHandles} />

        <hr />

        <BuildsList classes={props.data.classes} />
      </div>
    </div>
  );
}

export default Builds;

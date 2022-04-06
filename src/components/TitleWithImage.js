import React from 'react';
import './TitleWithImage.scss';

function TitleWithImage(props) {
  return (
    <div className="TitleWithImage">
      <img src={props.imageUrl} alt={props.imageAlt} />

      <h1>{props.title}</h1>
    </div>
  );
}

export default TitleWithImage;

import React from 'react';
import './TitleWithImage.css';

function TitleWithImage(props) {
  return (
    <div className="title-with-image">
      <img src={props.imageUrl} alt={props.imageAlt} />

      <h1>{props.title}</h1>
    </div>
  );
}

export default TitleWithImage;

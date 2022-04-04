import React, { useState } from 'react';

import './Spoiler.scss';

function Spoiler(props) {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    setActive((prevActive) => !prevActive);
  };

  return (
    <div className={`Spoiler ${active ? 'is-active' : ''}`}>
      <h4 className="Spoiler__title">
        <a href="/" onClick={handleClick}>
          {props.title}
        </a>
      </h4>

      <div className="Spoiler__entry">
        {props.children}
      </div>
    </div>
  );
}

export default Spoiler;

import React from 'react';

function NavToggle(props) {
  return (
    <div className="nav-open" onClick={props.handleClick}>
      <svg viewBox="0 0 30 22" width="30" height="15" fill="#fff">
        <rect width="30" height="2" rx="3"></rect>
        <rect y="8" width="30" height="2" rx="3"></rect>
        <rect y="16" width="30" height="2" rx="3"></rect>
      </svg>
    </div>
  );
}

export default NavToggle;

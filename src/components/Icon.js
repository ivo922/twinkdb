import React from 'react';

import './Icon.scss';

function Icon(props) {
  const icon = () => {
    switch (props.name) {
      case 'arrow-right':
        return (
          <span className={`Icon Icon--${props.name}`}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enableBackground="new 0 0 1000 1000"
            >
              <g>
                <path d="M983.3,484.4L760.6,261.7c-4.5-4.5-8.9-6.7-15.6-6.7c-13.4,0-22.3,8.9-22.3,22.3c0,6.7,2.2,11.1,6.7,15.6l184.9,184.9h-882c-13.4,0-22.3,8.9-22.3,22.3c0,13.4,8.9,22.3,22.3,22.3h882L729.4,707.1c-4.5,4.5-6.7,8.9-6.7,15.6c0,13.4,8.9,22.3,22.3,22.3c6.7,0,11.1-2.2,15.6-6.7l222.7-222.7c4.5-4.5,6.7-8.9,6.7-15.6S987.8,488.9,983.3,484.4z" />
              </g>
            </svg>
          </span>
        );

      default:
        return <span className="Icon"></span>;
    }
  };

  return icon();
}

export default Icon;

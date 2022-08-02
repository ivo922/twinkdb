import React, { useEffect, useState } from 'react';

import TitleWithImage from '../components/TitleWithImage';

function Farming(props) {
  const [activeTab, setActiveTab] = useState('select');

  const images = {
    heading: {
      src: require('../assets/images/farming.png'),
      alt: 'Farming',
    },
  };

  const tabs = ['Legion', 'Pandaria', 'BFA'];
  const tabLinks = tabs.map((tab, index) => {
    return (
      <li key={index}>
        <a href="/" onClick={(event) => {
          event.preventDefault();
          handleTabsNavClick(tab.toLowerCase());
        }}>{tab}</a>
      </li>
    );
  });

  const handleTabsNavClick = (tab) => {
    setActiveTab(tab);
  }

  const legion = <div>Legion</div>
  const pandaria = <div>Pandaria</div>
  const bfa = <div>BFA</div>

  const tabsContent = {
    legion,
    pandaria,
    bfa,
  }

  useEffect(() => {
    document.title = 'TwinkDB - Farming';
  }, []);

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Farming"
        />

        <hr />

        <div className="tabs">
          <div className="tabs__head">
            <div className="tabs__nav">
              <ul>{tabLinks}</ul>
            </div>
          </div>

          <div className="tabs__body">
            {tabsContent[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farming;

import React, { useEffect } from 'react';

import TitleWithImage from '../components/TitleWithImage';
import TablesList from '../components/TablesList';
import ReactMarkdown from 'react-markdown';

function Gems(props) {
  const images = {
    heading: {
      src: require('../assets/images/gem.png'),
      alt: 'Gems',
    },
  };

  useEffect(() => {
    document.title = 'TwinkDB - Gems';
  }, []);

  const description = [
    "*Only viable gems are included here.*  \n",
    "*All Wotlk and TBC gems - [click here](https://www.wowhead.com/items/gems?filter-any=166:166;2:3;0:0).*  \n",
    "*Honor mark vendors - [](https://www.wowhead.com/npc=12781/master-sergeant-biggins) (alliance) &amp; [](https://www.wowhead.com/npc=12793/brave-stonehide) (horde).*  \n",
    "*NPC that sells gems for starters - [](https://www.wowhead.com/npc=19065/inessera) (Aldor) &amp; [](https://www.wowhead.com/npc=19330/lisrythe-bloodwatch) (Scryers).*"
  ].join('')

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Gems"
        />

        <hr />

        <ReactMarkdown children={description} />

        <TablesList data={props.data.categories} />
      </div>
    </div>
  );
}

export default Gems;

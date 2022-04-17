import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import BuildsData from '../DB/builds.json';

import TitleWithImage from './TitleWithImage';

import './Build.scss';
import BuildTable from './BuildTable';

function Build() {
  const params = useParams();
  const build = BuildsData.classes
    .find((cls) => cls.name_handle === params.cls)
    .builds.find((build) => build.id === params.id);

  const images = {
    heading: {
      src: require(`../assets/images/classes/class-${build.class_handle}-${build.spec_handle}.png`),
      alt: `${build.class_handle} ${build.spec_handle}`,
    },
  };

  // Reload wowhead links on tab change.
  useEffect(() => {
    window.$WowheadPower.refreshLinks();
  });

  return (
    <div className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title={build.title}
        />

        <hr />

        <div className="Build">
          <div className="Build__head">
            <h2>Stat priority:</h2>

            <ReactMarkdown>{build.stat_priority}</ReactMarkdown>
          </div>

          <div className="Build__body">
            <div className="Build__col">
              <h2>Gear:</h2>

              <BuildTable type="gear" data={build.gear} />
            </div>

            <div className="Build__col">
              <h2>Enchants:</h2>

              <BuildTable type="enchants" data={build.enchants} />
            </div>

            <div className="Build__col">
              <h2>Gems:</h2>

              <BuildTable type="gems" data={build.gems} />
            </div>

            <div className="Build__col">
              <h2>Consumables:</h2>

              <BuildTable type="consumables" data={build.consumables} />
            </div>

            {build.notes.length !== 0 &&
              <div className="Build__col Build__col--full Build__notes">
                <h2>Notes:</h2>

                <ReactMarkdown>{build.notes.join('')}</ReactMarkdown>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Build;

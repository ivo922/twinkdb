import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import BuildsData from '../DB/builds.json';

import TitleWithImage from './TitleWithImage';

import './Build.scss';

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

              <ReactMarkdown>{build.gear.join('')}</ReactMarkdown>
            </div>

            <div className="Build__col">
              <h2>Enchants:</h2>

              <ReactMarkdown>{build.enchants.join('')}</ReactMarkdown>
            </div>

            <div className="Build__col">
              <h2>Gems:</h2>

              <ReactMarkdown>{build.gems.join('')}</ReactMarkdown>
            </div>

            <div className="Build__col">
              <h2>Consumables:</h2>

              <ReactMarkdown>{build.consumables.join('')}</ReactMarkdown>
            </div>

            {build.notes &&
              <div className="Build__col build__col--full">
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

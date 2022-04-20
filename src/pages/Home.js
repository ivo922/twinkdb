import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import LogoText from '../components/LogoText';
import Spoiler from '../components/Spoiler';

import routes from '../routes';

function Home() {
  const images = {
    suggest: {
      src: require('../assets/images/suggest.png'),
      alt: 'Suggest an item',
    },
    feedback: {
      src: require('../assets/images/feedback.png'),
      alt: 'Feedback',
    },
    guides: {
      src: require('../assets/images/guides.png'),
      alt: 'Guides',
    },
    weapons: {
      src: require('../assets/images/weapon.png'),
      alt: 'Weapons category',
    },
    armor: {
      src: require('../assets/images/armor.png'),
      alt: 'Armor category',
    },
    trinkets: {
      src: require('../assets/images/trinket.png'),
      alt: 'Trinkets category',
    },
    gems: {
      src: require('../assets/images/gem.png'),
      alt: 'Gems category',
    },
    enchants: {
      src: require('../assets/images/enchant.png'),
      alt: 'Enchants category',
    },
    consumables: {
      src: require('../assets/images/consumable.png'),
      alt: 'Consumables category',
    },
    builds: {
      src: require('../assets/images/builds.png'),
      alt: 'Builds category',
    },
    calculator: {
      src: require('../assets/images/calculator.png'),
      alt: 'Stats calculator',
    },
  };

  // Reload wowhead links on tab change.
  useEffect(() => {
    window.$WowheadPower.refreshLinks();
    document.title = 'TwinkDB - Home';
  }, []);

  return (
    <div className="main">
      <div className="main__head container">
        <h1>
          Welcome to <LogoText />
        </h1>

        <p>
          The purpose of this tool is to gather the best twink items for the 20s
          bracket. <br />
          <em>
            <strong>This is by no means a definite BiS guide</strong>
          </em>
          <br />
          Here you can find various dungeon drops, rare mob drops, quest rewards
          and crafted items. <br />
          Legion and BFA green BoEs and non-existent items like Destiny,
          Jackhammer or Edward will not be included.
        </p>

        <p>
          <strong>
            This is not a F2P only resource. While most of the items shown here
            are available to F2P players <br />
            some of them require a higher level character to obtain for level
            20.
          </strong>
        </p>
      </div>

      <div className="main__body">
        <div className="main__aside">
          <div className="container">
            <h2>Contribute:</h2>

            <ul className="widgets">
              <li className="widget">
                <div className="widget__image">
                  <img src={images.suggest.src} alt={images.suggest.alt} />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">Suggest an Item</h3>

                  <p>
                    <a target="_blank" rel="noreferrer" href={routes.suggest}>
                      Click here!
                    </a>
                  </p>
                </div>
              </li>

              <li className="widget">
                <div className="widget__image">
                  <img src={images.feedback.src} alt={images.feedback.alt} />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">Got feedback?</h3>

                  <p>
                    <a target="_blank" rel="noreferrer" href={routes.feedback}>
                      Tell me here!
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="container">
            <h2>More resources:</h2>

            <ul className="widgets">
              <li className="widget">
                <div className="widget__image">
                  <img src={images.guides.src} alt={images.guides.alt} />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">For more level 20 guides</h3>

                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={routes.moreGuides}
                    >
                      Visit XPOFF
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="main__content">
          <div className="container">
            <h2>Items:</h2>

            <div className="categories">
              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.weapons}>
                      <img src={images.weapons.src} alt={images.weapons.alt} />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.weapons}>Weapons</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.armor}>
                      <img src={images.armor.src} alt={images.armor.alt} />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.armor}>Armor</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.trinkets}>
                      <img
                        src={images.trinkets.src}
                        alt={images.trinkets.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.trinkets}>Trinkets</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.gems}>
                      <img
                        src={images.gems.src}
                        alt={images.gems.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.gems}>Gems</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.enchants}>
                      <img
                        src={images.enchants.src}
                        alt={images.enchants.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.enchants}>Enchants</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item category__item--coming-soon">
                <div className="category">
                  <div className="category__image">
                    <Link to={routes.consumables}>
                      <img
                        src={images.consumables.src}
                        alt={images.consumables.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to={routes.consumables}>Consumables</Link>
                  </h3>
                </div>
              </div>
            </div>

            <h2>Tools:</h2>

            <div className="categories">
              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/builds">
                      <img src={images.builds.src} alt={images.builds.alt} />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="/builds">Builds</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/calculator">
                      <img
                        src={images.calculator.src}
                        alt={images.calculator.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="/calculator">Calculator</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Latest update:</h2>

            <Spoiler title="26 Feb 2022">
              <h3>The following items have been added:</h3>

              <ul>
                <li>
                  <h4>Leather:</h4>

                  <ul>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=28348/moonglade-cowl?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=28224/wastewalker-helm?bonus=6710?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=27531/wastewalker-gloves?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>Mail:</h4>

                  <ul>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=37188/plunderers-helmet?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=27802/tidefury-shoulderguards?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=27743/girdle-of-living-flame?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                    <li>
                      <a
                        data-wh-icon-size="small"
                        href="https://www.wowhead.com/item=24388/girdle-of-the-gale-storm?ilvl=25"
                      >
                        link
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <h3>The following items have been removed:</h3>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87420?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87477?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </Spoiler>

            <p style={{ marginTop: '10px' }}>
              For previous updates visit{' '}
              <Link to={routes.changelog}>the changelog</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

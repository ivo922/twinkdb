import React from 'react';
import LogoText from '../components/LogoText';
import { Link } from 'react-router-dom';

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
    builds: {
      src: require('../assets/images/builds.png'),
      alt: 'Builds category',
    },
    calculator: {
      src: require('../assets/images/calculator.png'),
      alt: 'Stats calculator',
    },
  };

  const routes = {
    armor: '/armor',
    weapons: '/weapons',
    trinkets: '/trinkets',
    builds: '/builds',
    calculator: '/calculator',
    suggest:
      'https://docs.google.com/forms/d/e/1FAIpQLSeYFPOynx0F7DMazBJEviIUz3oQ2mmB-VNAiT9BKcVwyThlig/viewform?usp=sf_link',
    moreGuides:
      'https://xpoff.com/threads/20s-guide-index-and-faq-read-before-posting-new-threads.95324/',
    feedback: 'https://xpoff.com/threads/level-20-items-sheet-updated.97014/',
  };

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
                    <Link to="weapons">
                      <img src={images.weapons.src} alt={images.weapons.alt} />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="weapons">Weapons</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="armor">
                      <img src={images.armor.src} alt={images.armor.alt} />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="armor">Armor</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="trinkets">
                      <img
                        src={images.trinkets.src}
                        alt={images.trinkets.alt}
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="trinkets">Trinkets</Link>
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
        </div>
      </div>
    </div>
  );
}

export default Home;

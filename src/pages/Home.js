import React from 'react';
import LogoText from '../components/LogoText';
import { Link } from 'react-router-dom';

function Home() {
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
                  <img
                    src={ require('../assets/images/suggest.png') }
                    alt="Suggest an item"
                  />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">Suggest an Item</h3>

                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeYFPOynx0F7DMazBJEviIUz3oQ2mmB-VNAiT9BKcVwyThlig/viewform?usp=sf_link"
                    >
                      Click here!
                    </a>
                  </p>
                </div>
              </li>

              <li className="widget">
                <div className="widget__image">
                  <img src={ require('../assets/images/feedback.png') } alt="Feedback" />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">Got feedback?</h3>

                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://xpoff.com/threads/level-20-items-sheet-updated.97014/"
                    >
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
                  <img src={ require('../assets/images/guides.png') } alt="Guides" />
                </div>

                <div className="widget__content">
                  <h3 className="widget__title">For more level 20 guides</h3>

                  <p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://xpoff.com/threads/20s-guide-index-and-faq-read-before-posting-new-threads.95324/"
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
            <h2>Quick links:</h2>

            <div className="categories">
              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/weapons">
                      <img
                        src={ require('../assets/images/weapon.png') }
                        alt="Weapons category"
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="/weapons">Weapons</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/armor">
                      <img
                        src={ require('../assets/images/armor.png') }
                        alt="Armor category"
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="/armor">Armor</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/trinkets">
                      <img
                        src={ require('../assets/images/trinket.png') }
                        alt="Trinkets category"
                      />
                    </Link>
                  </div>

                  <h3 className="category__title">
                    <Link to="/trinkets">Trinkets</Link>
                  </h3>
                </div>
              </div>

              <div className="categories__item">
                <div className="category">
                  <div className="category__image">
                    <Link to="/builds">
                      <img
                        src={ require('../assets/images/builds.png') }
                        alt="Builds category"
                      />
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
                        src={ require('../assets/images/calculator.png') }
                        alt="Calculator category"
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

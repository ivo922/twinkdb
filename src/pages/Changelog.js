import React, { useEffect } from 'react';

import TitleWithImage from '../components/TitleWithImage';
import Spoiler from '../components/Spoiler';
import { Link } from 'react-router-dom';

function Changelog() {
  const images = {
    heading: {
      src: require('../assets/images/changelog.png'),
      alt: 'Changelog',
    },
  };

  // Reload wowhead links on tab change.
  useEffect(() => {
    window.$WowheadPower.refreshLinks();
    document.title = 'TwinkDB - Changelog';
  }, []);

  return (
    <main className="main">
      <div className="container always-visible">
        <TitleWithImage
          imageUrl={images.heading.src}
          imageAlt={images.heading.alt}
          title="Changelog"
        />

        <hr />

        <Spoiler title="8 June 2022 (Items)">
          <h3>The following items have been removed:</h3>

          <ul>
            <li>
              <h4>Weapons:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37749/shocking-claws?ilvl=27"
                  >
                    Shocking Claws
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119378/socrethars-stone?ilvl=25"
                  >
                    Socrethar's Stone
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155422/pirate-chiefs-speargun?ilvl=25"
                  >
                    Pirate Chief's Speargun
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Armor:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/npc=10439/ramstein-the-gorger"
                  >
                    Band of Flesh
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Consumables:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=41509/frostweave-net"
                  >
                    Frostweave Net
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="2 May 2022 (Remove Draenor trinkets)">
          <h3>The following items have been removed:</h3>

          <ul>
            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=111530?ilvl=25"
                  >
                    Giantstalker's Guile
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=118881?ilvl=26"
                  >
                    Bajheric Bangle
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=28170/auchenai-bracers?bonus=6710&ilvl=25"
                  >
                    Auchenai Bracers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="1 May 2022 (Saved items)">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Weapons:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=17943/fist-of-stone?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <h3>Checklist added.</h3>
        </Spoiler>

        <Spoiler title="22 April 2022">
          <ul>
            <li>Gems added.</li>
            <li>Enchants added.</li>
            <li>New items added.</li>
            <li>Builds redesigned.</li>
            <li>Router updated.</li>
          </ul>
        </Spoiler>

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

        <Spoiler title="30 Jan 2022 (Calculator)">
          <h3>
            Stats calculator has been added.{' '}
            <Link to="/calculator">Link here</Link>
          </h3>

          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Necks:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=144130/necklace-of-disorientation?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13503/alchemist-stone"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="14 Jan 2022">
          <h3>Site changes:</h3>

          <ul>
            <li>Weapon DPS added to all weapons on which it matters.</li>
            <li>Armor is now ordered by rarity just like the weapons.</li>
          </ul>

          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Daggers:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=43613&ilvl=27"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Ranged:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87477&ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloth:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87450?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87452?ilvl=28"
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
                    href="https://www.wowhead.com/item=141573?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Plate:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87454?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87453?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119383?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Necks:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=151437?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=137440?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87500?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=27770?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=159765?ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="31 Dec 2021 (Builds)">
          <h3>
            Builds have been added! Check them out{' '}
            <Link to="/builds">here</Link>
          </h3>

          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Mail:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141575/gorrogs-serene-gaze?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=24357/vest-of-living-lightning?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloaks:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=158583/quillstitch-greatcloak?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="20 Dec 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Caster weapons:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=20647&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37078&ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37042&ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37015&ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Daggers:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=4091&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37802&ilvl=27"
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
                    href="https://www.wowhead.com/item=27428?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Amulets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=18317?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=133636?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Rings:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=17713?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37660?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37657?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="27 Nov 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Weapons:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=87420&ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=118788&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=24222&ilvl=27"
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
                    href="https://www.wowhead.com/item=132561?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=161218?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=152634?ilvl=19"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="13 Nov 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Rings:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155560?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=158598?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31339?ilvl=26"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloaks:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141589&ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141590&ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Amulets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31338&ilvl=26"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Daggers:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31331&ilvl=27"
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
                    href="https://www.wowhead.com/item=87456&ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=113527?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="6 Nov 2021 (Drustar & Nazmir + a few others)">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Weapons:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=158711&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=154217&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160449&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155299&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155425&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=159518&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160973&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Offhands:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160447?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Shields:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=158683?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Rings:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160987?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160985?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Plate:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160474?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160475?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=161111?ilvl=25"
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
                    href="https://www.wowhead.com/item=161098?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=161101?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=161092?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <h3>Site changes:</h3>
          <ul>
            <li>
              New: item category anchoring. You can now share links that point
              to a specific table.
            </li>
            <li>Sorted weapons by rarity.</li>
          </ul>
        </Spoiler>

        <Spoiler title="25 Oct 2021">
          <h3>The following items have been removed (not obtainable)</h3>

          <ul>
            <li>
              <h4>Rings:</h4>

              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=163934?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=163933?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="24 Oct 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Amulets:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141588?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141587?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Rings:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141580?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141582?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=163934?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=163933?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141583?ilvl=28"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Weapons:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=9485?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=39829&ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13021&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13039&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=2877&ilvl=27"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloth:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31657?ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31658?ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Plate:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=27715?ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="16 Oct 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Trinkets:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=118879?ilvl=26"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=118883?ilvl=26"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=42341?ilvl=19"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Weapons:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13033&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=35633&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160958&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160451&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Rings:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=88265?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13345?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloaks:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155571?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=154478&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="9 Oct 2021 (WoD daily rares)">
          <h3>
            <em>
              Added WoD apexis rare drops that are farmable daily and can proc a
              socket. Credits to <strong>Raadón-ArgentDawn (EU)</strong>
            </em>
          </h3>

          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Amulets:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119230?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119376?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119377?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Rings:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119415?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="hhttps://www.wowhead.com/item=119387?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloaks:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119414?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119349?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119366?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119360?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloth:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119228?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>1H weapons:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119400&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Caster:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119396&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119399&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Off-hands:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119391?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119390?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=119379?ilvl=25"
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
              <h4>Cloaks:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=18350?ilvl=25"
                  >
                    link
                  </a>{' '}
                  - Replaced by a rare WoD drop.
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=144121?ilvl=25"
                  >
                    link
                  </a>{' '}
                  - Replaced by a rare WoD drop.
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=113150?ilvl=25"
                  >
                    link
                  </a>{' '}
                  - Replaced by a rare WoD drop.
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="2 Oct 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Rings:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160087?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=130021?ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=129172?ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141581?ilvl=28"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=160261?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Amulets:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=129329?ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=141647?ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Cloaks:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155884?ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=113150?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Leather:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=20104?ilvl=23"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Plate:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=37182?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Trinkets:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=131799?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Daggers:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31305&ilvl=27"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Caster weapons:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=31289&ilvl=27"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=61110&ilvl=24"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155551&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Off-hand:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=17737&ilvl=25"
                  >
                    link
                  </a>
                </li>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13031?ilvl=27"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Spoiler>

        <Spoiler title="26 Sept 2021">
          <h3>The following items have been added:</h3>

          <ul>
            <li>
              <h4>Polearm:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=13058&ilvl=27"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Dagger:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=10761&ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Caster weapons:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155278&ilvl=25"
                  >
                    link
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=155273&ilvl=25"
                  >
                    link
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=1405&ilvl=24"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Off-hand:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=158597?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Plate:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=27771?ilvl=25"
                  >
                    link
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=27497?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h4>Necks:</h4>
              <ul>
                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=134499?ilvl=25"
                  >
                    link
                  </a>
                </li>

                <li>
                  <a
                    data-wh-icon-size="small"
                    href="https://www.wowhead.com/item=137458?ilvl=25"
                  >
                    link
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <h3>The following site changes have been made:</h3>

          <ul>
            <li>
              <a
                data-wh-icon-size="small"
                href="https://www.wowhead.com/item=118877?ilvl=26"
              >
                link
              </a>{' '}
              and{' '}
              <a
                data-wh-icon-size="small"
                href="https://www.wowhead.com/item=118881?ilvl=26"
              >
                link
              </a>{' '}
              moved to super rare.
            </li>

            <li>Added zone text to items' source.</li>
          </ul>
        </Spoiler>

        <Spoiler title="22 Sept 2021">
          <h4>The following items have been added:</h4>

          <strong>Ranged:</strong>

          <ul>
            <li>Precisely Calibrated Boomstick</li>

            <li>Guttbuster</li>

            <li>Vlaros Corps Rifle</li>

            <li>Iron Lookout's Arbalest</li>
          </ul>

          <strong>Cloth:</strong>

          <ul>
            <li>Terrorcloth Mantle</li>
          </ul>

          <strong>Back:</strong>

          <ul>
            <li>Cloak of Hidden Flasks</li>
          </ul>
        </Spoiler>
      </div>
    </main>
  );
}

export default Changelog;

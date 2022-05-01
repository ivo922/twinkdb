import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

import routes from '../routes';
import WishlistButton from './WishlistButton';

function Nav(props) {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    setActive(props.active);
  }, [props.active])


  const handleClick = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setActive(false);
    }
  }

  return (
    <div className={`Nav ${active ? 'is-active' : ''}`}>
      <ul className="Nav__level-1">
        <li>
          <span>Items</span>

          <ul className="Nav__level-2">
            <li>
              <NavLink to={routes.weapons} onClick={handleClick}>Weapons</NavLink>
            </li>

            <li>
              <NavLink to={routes.armor} onClick={handleClick}>Armor</NavLink>
            </li>

            <li>
              <NavLink to={routes.trinkets} onClick={handleClick}>Trinkets</NavLink>
            </li>

            <li>
              <NavLink to={routes.gems} onClick={handleClick}>Gems</NavLink>
            </li>

            <li>
              <NavLink to={routes.enchants} onClick={handleClick}>Enchants</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to={routes.builds} onClick={handleClick}>Builds</NavLink>
        </li>

        <li>
          <NavLink to={routes.calculator} onClick={handleClick}>Calculator</NavLink>
        </li>

        <li>
          <WishlistButton />
        </li>
      </ul>

      <div className="Nav__close" onClick={props.handleClick}></div>
    </div>
  );
}

export default Nav;

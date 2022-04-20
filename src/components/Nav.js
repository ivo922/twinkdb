import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

import routes from '../routes';

function Nav(props) {
  return (
    <div className={`Nav ${props.active ? 'is-active' : ''}`}>
      <ul className="Nav__level-1">
        <li>
          <span>Items</span>

          <ul className="Nav__level-2">
            <li>
              <NavLink to={routes.weapons}>Weapons</NavLink>
            </li>

            <li>
              <NavLink to={routes.armor}>Armor</NavLink>
            </li>

            <li>
              <NavLink to={routes.trinkets}>Trinkets</NavLink>
            </li>

            <li>
              <NavLink to={routes.gems}>Gems</NavLink>
            </li>

            <li>
              <NavLink to={routes.enchants}>Enchants</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to={routes.builds}>Builds</NavLink>
        </li>

        <li>
          <NavLink to={routes.calculator}>Calculator</NavLink>
        </li>
      </ul>

      <div className="Nav__close" onClick={props.handleClick}></div>
    </div>
  );
}

export default Nav;

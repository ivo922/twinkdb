import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav(props) {
  return (
    <div className={`Nav ${props.active ? 'is-active' : ''}`}>
      <ul className="Nav__level-1">
        <li>
          <span>Items</span>

          <ul className="Nav__level-2">
            <li>
              <NavLink to="weapons">Weapons</NavLink>
            </li>

            <li>
              <NavLink to="armor">Armor</NavLink>
            </li>

            <li>
              <NavLink to="trinkets">Trinkets</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/builds">Builds</NavLink>
        </li>

        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
      </ul>

      <div className="Nav__close" onClick={props.handleClick}></div>
    </div>
  );
}

export default Nav;

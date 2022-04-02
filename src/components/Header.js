import { NavLink } from 'react-router-dom';
import LogoText from './LogoText';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <LogoText />

        <div className="nav">
          <ul className="nav__level-1">
            <li>
              <span>Items</span>

              <ul className="nav__level-2">
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

          <div className="nav__close"></div>
        </div>

        <div className="nav-open">
          <svg viewBox="0 0 30 22" width="30" height="15" fill="#fff">
            <rect width="30" height="2" rx="3"></rect>
            <rect y="8" width="30" height="2" rx="3"></rect>
            <rect y="16" width="30" height="2" rx="3"></rect>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;

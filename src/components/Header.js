import { useState } from 'react';
import LogoText from './LogoText';
import './Header.scss';
import Nav from './Nav';
import NavToggle from './NavToggle';

function Header() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = (event) => {
    setNavActive(prevState => !prevState);
  };

  return (
    <header className="Header">
      <div className="Header__inner">
        <LogoText />

        <Nav active={navActive} handleClick={toggleNav} />

        <NavToggle handleClick={toggleNav} />
      </div>
    </header>
  );
}

export default Header;

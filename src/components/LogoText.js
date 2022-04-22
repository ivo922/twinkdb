import { Link } from 'react-router-dom';
import './LogoText.scss';

import routes from '../routes';

function LogoText() {
  return (
    <div className="LogoText">
      <Link to={routes.home}>TWINKDB</Link>
    </div>
  );
}

export default LogoText;

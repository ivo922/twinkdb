import { Link } from 'react-router-dom';
import './LogoText.scss';

function LogoText() {
  return (
    <div className="LogoText">
      <Link to="/">TWINKDB</Link>
    </div>
  );
}

export default LogoText;

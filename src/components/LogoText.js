import { Link } from 'react-router-dom';
import './LogoText.css';

function LogoText() {
  return (
    <div className="logo">
      <Link to="/">TWINKDB</Link>
    </div>
  );
}

export default LogoText;

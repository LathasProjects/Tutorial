// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <nav>
      <ul className="ul-container">
        <Link to="/">
          <li className="li-container">Home</li>
        </Link>
        <Link to="/about">
          <li className="li-container">About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header

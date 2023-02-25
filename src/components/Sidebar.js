import { Link, NavLink } from 'react-router-dom';
import './styles/sidebar.scss';
import LogoBG from '../assets/icons/be-graphic-icon-inverted.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoBG} alt ="logo"/>
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" > 
          <FontAwesomeIcon className='menu-icon' icon={faHome} color = "#FFFFFF" />
        </NavLink>
        <NavLink exact="true" 
          className="about-link" 
          activeclassname="active" 
          to="/about" 
        > 
          <FontAwesomeIcon className='menu-icon' icon={faUser} color = "#FFFFFF" />
        </NavLink>   
        <NavLink exact="true" 
          className="contact-link" 
          activeclassname="active" 
          to="/contact"
        > 
          <FontAwesomeIcon className='menu-icon' icon={faEnvelope} color = "#FFFFFF" />
        </NavLink>           
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/lizeth-salcedo-vergara-755644160/'>
            <FontAwesomeIcon className='social-icon' icon = {faLinkedin} color = "#FFFFFF" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href='https://wa.me/34666615881'>
            <FontAwesomeIcon className='social-icon' icon = {faSquareWhatsapp} color = "#FFFFFF" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
import React from 'react';
import {Link} from 'react-scroll';
import '../styles/Nav/Nav.css'

function Nav() {

  return (
    <div className='menu'>
        <nav className='nav'>
            <ul className='items'>
                <li className="item">
                <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
                 Home
                </Link>
                </li>
                <li className="item">
                <Link to="About" spy={true} smooth={true} offset={-100} duration={500}>
                 About
                </Link>
                </li>
                <li className="item">
                <Link to="Skills" spy={true} smooth={true} offset={-100} duration={500}>
                 Skills
                </Link>
                </li>
                <li className="item">
                <Link to="Projects" spy={true} smooth={true} offset={-100} duration={500}>
                 Projects
                </Link>
                </li>
                <li className="item">
                <Link to="Contact" spy={true} smooth={true} offset={-150} duration={500}>
                 Contact
                </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
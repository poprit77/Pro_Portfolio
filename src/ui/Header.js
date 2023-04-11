import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import logo from '../Snake.png';

const Header = () => {
  const styles= {
    linkLogoColor: {
      color: '#1E3050'
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to='/' className='navbar-brand'>
          <img
            src={logo}
            width='75'
            height='60'
            className='d-inline-block align-top'
            alt='Brand Logo'
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/Story' className='nav-link'>Who I Am</Link>
            <Link to='/Work' className='nav-link'>Work</Link>
            <Link to='/Resume' className='nav-link'>Resume</Link>
          </Nav>
          <Nav>
            <NavDropdown title="Contact Me" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link to='/Contact' style={styles.linkLogoColor}><FontAwesomeIcon icon={faEnvelope} style={styles.linkLogoColor}/>{' '}Email</Link></NavDropdown.Item>
              
                <NavDropdown.Item href="https://www.linkedin.com/in/peter-ataras-38811646/" target='_blank'><FontAwesomeIcon icon={faLinkedin} style={styles.linkLogoColor}/>{' '}LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/poprit77" target='_blank'><FontAwesomeIcon icon={faSquareGithub} style={styles.linkLogoColor}/>{' '}GitHub</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
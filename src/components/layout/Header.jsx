import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { LiaConnectdevelop } from "react-icons/lia";

import styles from './Header.module.scss';
import useTheme from '../../hooks/useTheme';
import ThemeToggler from "../common/ThemeToggler";

const Header = () => {
  const { theme } = useTheme(); 

  return (
    <Navbar className={`${styles.navbar} ${styles[theme]}`}>
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to='/'>
          <LiaConnectdevelop className={styles.icon}  /> useMyFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* LEFT-HAND NAVS */}
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/about'>ABOUT</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/projects'>PROJECTS</Nav.Link>
          </Nav>
 
          {/* RIGHT-HAND NAVS */}
          <div>
            <ThemeToggler />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
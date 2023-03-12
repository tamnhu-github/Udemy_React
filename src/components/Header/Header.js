import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../Auth/Login';
import { useSelector } from 'react-redux';
const Header = () => { 
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const account = useSelector(state => state.user.account);
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Hỏi Dân IT</Navbar.Brand> */}
        <NavLink to="/" className='navbar-brand fw-bolder'>Hỏi Dân IT</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavLink to="/" className='nav-link'>Home</NavLink>
                <NavLink to="/users" className='nav-link'>Users</NavLink>
                <NavLink to="/admin" className='nav-link'>Admin</NavLink>

                {/* <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link> */}
            </Nav>
            <Nav>
                {isAuthenticated === false 
                  ? 
                    <>
                      <button className='btn-login' onClick={() => navigate('/login')}>Log in</button>
                      <button className='btn-signup' onClick={() => navigate('/register')}>Sign up</button>
                    </>
                  : 
                  <NavDropdown title="Setting" id="basic-nav-dropdown">
                    <NavDropdown.Item>Log out</NavDropdown.Item>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </NavDropdown>
                }
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
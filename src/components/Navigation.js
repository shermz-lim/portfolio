import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/">About Me.</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link to="/experience">Experience</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/cp">Competitive Programming</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/projects">Projects</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/teaching">Teaching</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

import { Navbar, Nav, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo-us.png";

function HeaderNotLoggedIn() {
  const { pathname } = useLocation();

  return (
    <header className="light-bb">
      <Navbar expand="lg">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto">
            {pathname !== "/login" ? (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <span>Login</span>
                </Link>
              </li>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default HeaderNotLoggedIn;

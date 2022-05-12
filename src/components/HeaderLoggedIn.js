import { Navbar, Nav, NavDropdown, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import user from "../assets/images/user.png";
import logo from "../assets/images/logo-us.png";

function Header() {
  return (
    <>
      <header className="light-bb">
        <Navbar expand="lg">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav mr-auto">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
            <Nav className="navbar-nav ml-auto">
              <Dropdown className="header-img-icon">
                <Dropdown.Toggle variant="default">
                  <img src={user} alt="avatar" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdown-header d-flex flex-column align-items-center">
                    <div className="figure mb-3">
                      <img src={user} alt="" />
                    </div>
                    <div className="info text-center">
                      <p className="name font-weight-bold mb-0">
                        {/* {auth.user.firstName} {auth.user.lastName} */}
                        prova prova
                      </p>
                      <p className="email text-muted mb-3">@prova</p>
                    </div>
                  </div>
                  <div className="dropdown-body">
                    <ul className="profile-nav">
                      <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                          <i className="icon ion-md-person"></i>
                          <span>Profile</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default Header;

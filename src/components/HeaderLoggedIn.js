import { Link } from "react-router-dom";
import user from "../assets/images/user.png";
import logo from "../assets/images/logo-us.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import Locale from "./Locale";
import { Dropdown } from "react-bootstrap";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const logout = () => {
    localStorage.clear();
    window.location.replace("http://localhost:3000/login");
  };

  return (
    <>
      <header>
        <nav>
          <div className="left-nav">
            <div className="logo">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <div className="sidebar-btn-wrapper">
              <Link to="/users">
                <FontAwesomeIcon icon={faUsers} />
              </Link>
            </div>
          </div>

          <div className="right-nav">
            <div className="locale">{/* <Locale /> */}</div>
            <Locale />
            {theme === "light" ? (
              <FontAwesomeIcon icon={faSun} onClick={() => setTheme("dark")} />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                onClick={() => setTheme("light")}
              />
            )}

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={user} alt="Avatar" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <div className="avatar">
                    <Link to="/profile">Profile</Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="settings">
                    <button
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

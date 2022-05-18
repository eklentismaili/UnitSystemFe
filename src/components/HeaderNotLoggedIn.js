import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo-us.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeContext";
import Locale from "./Locale";

function HeaderNotLoggedIn() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav>
        <div className="left-nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
        </div>

        <div className="right-nav">
          <div className="locale">{/* <Locale /> */}</div>
          <Locale />
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} onClick={() => setTheme("dark")} />
          ) : (
            <FontAwesomeIcon icon={faMoon} onClick={() => setTheme("light")} />
          )}

          {pathname !== "/login" ? (
            <li className="nav-item">
              <Link to="/login">
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </li>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </header>
  );
}

export default HeaderNotLoggedIn;

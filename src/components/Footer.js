import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/images/logo-us.png";

function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img src={logo} alt="logo" />
          </div>

          <div className="col-sm-12 col-md-6">
            <h6 className="font-weight-bold">We are focused on your goals</h6>
            <p>
              We are a licensed industry leader, at work to source the best
              products in the market for you, while also striving to increase
              accessibility and transparency in the trading industry.
            </p>
          </div>

          <div className="col-sm-12 col-md-3">
            <h6>Contact Us</h6>
            <ul className="social-icons">
              <li>
                <a className="facebook" href="javascript:void(0)">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a className="twitter" href="javascript:void(0)">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a className="dribbble" href="javascript:void(0)">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

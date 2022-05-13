import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function NotFound() {
  return (
    <div className="min-height-100vh not-found">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">404</h2>
            <p className="text-center">Oops something went wrong</p>
            <Link to="/" className="btn btn-primary">
              Back to <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

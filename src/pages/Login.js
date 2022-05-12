import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(undefined);
  const [isDisabled, setIsDisabled] = useState(false);
  //   const auth = useContext(AuthContext);

  const onChangeText = ({ name, value }) => {
    setError(undefined);
    setLoginForm({ ...loginForm, [name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    setIsDisabled(true);
    console.log(loginForm);
  };

  return (
    <>
      <div className="min-height-100vh d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={login} className="login-form">
                <h3 className="text-center">Sign In</h3>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(value) => {
                      onChangeText({
                        ...loginForm,
                        name: "email",
                        value: value.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(value) => {
                      onChangeText({
                        ...loginForm,
                        name: "password",
                        value: value.target.value,
                      });
                    }}
                    required
                  />
                </div>
                {error !== undefined ? (
                  <div className="error">{error}</div>
                ) : (
                  ""
                )}
                <div className="text-right">
                  <Link to="/verify-email">Forgot Password?</Link>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isDisabled}
                >
                  Sign In
                </button>
                <h4 className="mt-2">
                  Don't have an account? <Link to="/signup">Sign up here</Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React from "react";

function Home() {
  return (
    <div className="min-height-100vh mt-5 home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Hello I am Eklent Ismaili</h4>
            <p>
              This is a simple web application simulation with different
              features such as:
            </p>
            <ul>
              <li>Authentication using ReqRes fake API</li>
              <li>Protected Routes based on authentication status</li>
              <li>Table data pagination and filtering</li>
              {/* <li>Theme</li>
              <li>Localization</li> */}
            </ul>
            <p>
              To authenticate on login page use{" "}
              <span className="home-email">eve.holt@reqres.in</span>
              as the email and whatever string for password.
              <br />I used the Context API together with localStorage for global
              state management info such as user information, token and role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

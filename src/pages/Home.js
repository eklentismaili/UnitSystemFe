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
              <li>Table data pagination and filtering using JSON SERVER</li>
              <li>CRUD Operations on users and users tasks tables</li>
              <li>Light/Dark Theme</li>
              <li>It/En Localization</li>
            </ul>
            <p>To see the full run of this project:</p>
            <ol>
              <li>
                Install UnitSystemBe repo and then run:
                <ol>
                  <li>npm install</li>
                  <li>npm run json:server</li>
                </ol>
              </li>
              <li>
                Install UnitSystemFe repo and then run:
                <ol>
                  <li>npm install</li>
                </ol>
              </li>
              <li>
                Login with:
                <ol>
                  <li>
                    email: <b>eve.holt@reqres.in</b>
                  </li>
                  <li>
                    password: <b>password</b>
                  </li>
                </ol>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

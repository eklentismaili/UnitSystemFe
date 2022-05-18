import React from "react";
import { useTranslation } from "react-i18next";

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-height-100vh mt-5 home">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{t("home.title")}</h4>
            <p>{t("home.subtitle")}</p>
            <ul>
              <li>{t("home.features.auth")}</li>
              <li>{t("home.features.protected")}</li>
              <li>{t("home.features.table")}</li>
              <li>{t("home.features.crud")}</li>
              <li>{t("home.features.theme")}</li>
              <li>{t("home.features.localization")}</li>
            </ul>
            <p>{t("home.info")}</p>
            <ol>
              <li>
                {t("home.steps.1")}
                <ol>
                  <li>npm install</li>
                  <li>npm run json:server</li>
                </ol>
              </li>
              <li>
                {t("home.steps.2")}
                <ol>
                  <li>npm install</li>
                </ol>
              </li>
              <li>
                {t("home.steps.3")}
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

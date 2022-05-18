import ThemeProvider from "../providers/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../providers/AuthContext";
import Routes from "./Routes";
import LocaleProvider from "../providers/LocaleContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <LocaleProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </LocaleProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

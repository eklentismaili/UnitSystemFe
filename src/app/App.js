import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../providers/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

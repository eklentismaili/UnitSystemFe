import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";
import Footer from "./Footer";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderNotLoggedIn from "./HeaderNotLoggedIn";

function Layout({ children }) {
  const { token } = useContext(AuthContext);

  return (
    <>
      {token ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;

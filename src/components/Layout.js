import Footer from "./Footer";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderNotLoggedIn from "./HeaderNotLoggedIn";

function Layout({ children }) {
  return (
    <>
      <HeaderLoggedIn />
      <HeaderNotLoggedIn />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

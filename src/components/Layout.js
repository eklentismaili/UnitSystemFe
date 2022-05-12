import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderNotLoggedIn from "./HeaderNotLoggedIn";

function Layout({ children }) {
  return (
    <>
      <HeaderLoggedIn />
      <HeaderNotLoggedIn />
      {children}
    </>
  );
}

export default Layout;

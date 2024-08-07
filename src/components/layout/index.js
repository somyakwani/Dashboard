
import HeaderComponent from "./header";
import SideNavBarComponent from "./sidenav";

function Layout({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <HeaderComponent />
      <SideNavBarComponent />
      {children}
      
    </div>
  );
}
export default Layout;

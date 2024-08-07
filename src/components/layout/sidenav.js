import { useState, useEffect } from "react";
import {
  BagIcon,
  BarsIcon,
  ClipBoardIcon,
  HomeIcon,
  LogoutIcon,
  MainMenuIcon,
  WalletIcon,
} from "../../assets/icons";

function SideNavBarComponent() {
  let [ActiveBar, SetActiveBar] = useState(0);
  let [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function HandleClick(index) {
    SetActiveBar(index);
  }

  const config = [
    HomeIcon,
    BarsIcon,
    ClipBoardIcon,
    WalletIcon,
    BagIcon,
    LogoutIcon,
  ];

  return (
    <div
      style={{
        display: "flex",
        width: isMobile ? "100vw" : "5rem",
        backgroundColor: "#222831",
        height: isMobile ? "auto" : "100vh",
        position: isMobile ? "fixed" : "fixed",
        top: isMobile ? "auto" : 0,
        bottom: 0,
        left: isMobile ? 0 : "auto",
        right: isMobile ? 0 : "auto",
        paddingTop: isMobile ? "0" : "6rem",
        flexDirection: isMobile ? "row" : "column",
        justifyContent: isMobile ? "space-around" : "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {config.map((icon, i) => (
        <SideBarButton
          key={i}
          onClick={() => HandleClick(i)}
          active={i === ActiveBar}
          icon={icon}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

function SideBarButton({ active, icon, onClick, isMobile }) {
  return (
    <div
      style={{
        padding: "4px",
        width: isMobile ? "auto" : "4rem",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: isMobile ? "0" : "16px",
        borderLeft: !isMobile && active && "4px solid #82acff",
        borderBottom: isMobile && active && "4px solid #82acff",
      }}
      onClick={() => onClick()}
    >
      <div className="icon" style={{ color: "white" }}>
        {icon}
      </div>
    </div>
  );
}

export default SideNavBarComponent;
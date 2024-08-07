import { useState } from "react";
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
        width: "5rem",
        backgroundColor: "#222831",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        paddingTop: "6rem",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {config.map((icon, i) => (
        <SideBarbutton
          onClick={() => SetActiveBar(i)}
          active={i == ActiveBar}
          icon={icon}
        />
      ))}
    </div>
  );
}

function SideBarbutton({ active, icon, onClick }) {
  return (
    <div
      style={{
        padding: "4px",
        width: "4rem",
        height: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px",
        borderLeft: active && "4px solid #82acff",
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

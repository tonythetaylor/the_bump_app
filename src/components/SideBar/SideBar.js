import React from "react";

import baby_bundle from '../../images/baby_bundle.png';

const SideBar = ({ menuItems, styles }) => {

  const sidebarLogoStyle = {
    height: "4vh",
    width: "4vh",
    position: "fixed"
  };

  const sidebarStyle = {
    height: "100vh",
    width: styles.sidebarWidth,
    position: "fixed",
    backgroundColor: styles.black(),
    paddingTop: 40
  };

  const menuItemStyle = {
    display: "flex",
    justifyContent: styles.sidebarCollapsed ? "center" : "flex-start",
    alignItems: "center",
    padding: `4px ${styles.sidebarCollapsed ? 0 : 10}px`,
    color: styles.white(0.9)
  };

  const iconStyle = {
    fontSize: 26,
    marginRight: styles.sidebarCollapsed ? 0 : 10
  };

  const logoStyle = {
    textAlign: "center",
    color: styles.white(),
    fontSize: 34,
    marginBottom: 60,
    fontWeight: "bold"
  };

  return (
    <div style={sidebarStyle}>
      <div style={logoStyle}>
      {
        styles.sidebarCollapsed 
          ? <img style={sidebarLogoStyle} src={baby_bundle} height="96" alt="Baby.com"></img>
          : "BABY"
      }
      </div>
      {menuItems.map((item, i) => (
        <div key={i} style={menuItemStyle}>
          <span style={iconStyle}>{item.icon}</span>
          {!styles.sidebarCollapsed && item.text}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
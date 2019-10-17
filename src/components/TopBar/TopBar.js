import React from 'react';

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.black(),
    borderBottom: `1px solid ${styles.black(1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
      Baby Ant
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;
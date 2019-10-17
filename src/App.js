import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import FooterMenu from './components/FooterMenu/FooterMenu';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';

// import baby from './baby.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    // const currentDate = new Date();
    // const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    const { windowWidth } = this.state;
    const sidebarCollapsed = windowWidth < 1100;
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarCollapsed,
      sidebarWidth: sidebarCollapsed ? 50 : 150
    };
    const menuItems = [
      { icon: `😀`, text: "About" },
      { icon: `😉`, text: "Updates" },
      { icon: `😎`, text: "Images" },
      { icon: `🤔`, text: "Registry" },
      { icon: `😛`, text: "Subscribe" }
    ];

    if (styles.showSidebar) {
      menuItems.push({ icon: `😺️`, text: "Profile" });
      menuItems.push({ icon: `⚙`, text: "Settings" });
    }
   
    return (
      <div
        style={{
          backgroundColor: styles.black(1), // changed this value from 0.05 to get black
          minHeight: "100vh",
          position: "relative"
        }}
      >
        {styles.showSidebar ? (
          <SideBar menuItems={menuItems} styles={styles} />
        ) : (
          <TopBar styles={styles} />
        )}

        <Content styles={styles} />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
      </div>
    );
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //        <h5>Guess What</h5>  
    //     <img src={baby} className="App-logo" alt="logo" />
    //     <h3 className="title">Christmas Eve is coming soon (Midnight of 23rd to 24th Dec, UTC time):</h3>
    //     <Countdown date={`2020-04-29T00:00:00`} />
    //       <h2>BABY BUMP</h2>

    //     </div>

    //     <h3 className="title">Christmas Eve is coming soon (Midnight of 23rd to 24th Dec, UTC time):</h3>
    //     <Countdown date={`${year}-04-21T00:00:00`} />
    //   </div>
    // );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

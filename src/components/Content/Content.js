import React from "react";

import Countdown from '../Countdown/Countdown';
import Voting from '../Voting/Voting';
import '../../../src/App.css';


const Content = ({ styles }) => {

// const currDay = moment("2018-01-01");
// const birthday = moment("2018-02-16");

// const diff = moment.duration(birthday.diff(currDay));

// console.log(diff.months() + " months, " + diff.weeks() + " weeks, " + diff.days()%7 + " days.");

// console.log(Math.floor(diff.asWeeks()) + " weeks, " + diff.days()%7 + " days.");

  const contentStyle = {
    paddingTop: styles.showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: styles.showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
        <div className="App">
          <Voting />
            <div>
            <Countdown date={`2020-04-29T00:00:00`} />
    
            </div>
          </div>
    </div>
  );
};

export default Content;
import React from "react";

import Countdown from '../Countdown/Countdown';
import Voting from '../Voting/Voting';
import '../../../src/App.css';

import * as moment from 'moment';

const Content = ({ styles }) => {

const now = moment().format("YYYY-MM-DD");
const conception = moment("2019-07-21")
// const birthday = moment("2020-04-30");
const currDay = moment(now);

// const diff = moment.duration(birthday.diff(currDay));
const togo = moment.duration(currDay.diff(conception));

console.log(now)

// console.log(diff.months() + " months, " + diff.weeks() + " weeks, " + diff.days()%7 + " days.");

// console.log(Math.floor(diff.asWeeks()) + " weeks, " + diff.days()%7 + " days.");

// console.log(togo.months() + " months, " + togo.weeks() + " weeks, " + togo.days()%7 + " days.");

console.log(Math.floor(togo.asWeeks()) + " weeks, " + togo.days()%7 + " days.");

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
            <p>{Math.floor(togo.asWeeks()) + " weeks, " + togo.days()%7 + " days."}</p>
    
            </div>
          </div>
    </div>
  );
};

export default Content;
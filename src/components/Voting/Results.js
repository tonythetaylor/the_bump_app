import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Voting.css';
  
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
        boyNumber : props.boyNumber,
        girlNumber: props.girlNumber,
        progress: 0
    }

  }
  votesBoyInPercent() {
    const { boyNumber, girlNumber} = this.props;

    if (boyNumber) {
      return (boyNumber / (boyNumber + girlNumber)) * 100
    } else {
      return 0
    }
  }
  votesGirlInPercent() {
    const { boyNumber, girlNumber} = this.props;
    if (girlNumber) {
      return (girlNumber / (girlNumber + boyNumber)) * 100
    } else {
      return 0
    }
  }

  votesBoyInPercentStyle() {
    return {
      width: this.votesBoyInPercent()+'%'
    }
  }
  votesGirlInPercentStyle() {
    return {
      width: this.votesGirlInPercent()+'%'
    }
  }

  render() {
    return (
      <div>
        <span className="label label-danger">Boy: {this.votesBoyInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesBoyInPercentStyle()}></div>
        </div>
        <span className="label label-info">Girl: {this.votesGirlInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={this.votesGirlInPercentStyle()}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      boyNumber: state.boyNumber,
      girlNumber: state.girlNumber
    };
  }
  
  export default connect(mapStateToProps)(Results);
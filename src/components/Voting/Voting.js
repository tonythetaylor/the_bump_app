import React, { Component } from 'react';
import  Results  from './Results';
import { voteAngular, voteReact } from '../../redux/actions'
import { connect } from 'react-redux';

import  baby_boy from '../../images/baby_boy.png';
import  baby_girl from '../../images/baby_girl.png';

import './Voting.css';

const ProgressBar = ({ progress }) => ( 
    <div className="progressbar">
      <div className="progress-boy" style={{ width: `${progress}%`}}>
      </div>
    </div>
  )

const ProgressBarGirl = ({ progress }) => ( 
    <div className="progressbar">
        <div className="progress-girl" style={{ width: `${progress}%`}}>
        </div>
    </div>
)

class Voting extends Component {
constructor(props){
    super(props);
    this.state = {
        boyNumber : props.boyNumber,
        girlNumber: props.girlNumber,
        progress: 0
    }
}

  addOneBoy = () => {
    this.props.dispatch({ type: 'ADD_ONE_BOY' });
  }

  addOneGirl = () => {
    this.props.dispatch({ type: 'ADD_ONE_GIRL' });
  }

  handleVoteBoy = () => {
    const { boyNumber, girlNumber} = this.props;

    this.setState({ boyNumber: (boyNumber / (boyNumber + girlNumber)) * 100})
    this.props.dispatch(voteAngular());
  }
  handleVoteGirl = () => {
    const { boyNumber, girlNumber} = this.props;
    this.setState({ girlNumber: (girlNumber / (girlNumber + boyNumber)) * 100})
    this.props.dispatch(voteReact());
  }

  render() {
    const { boyNumber, girlNumber} = this.props;

    return (
      <div>
        <div className="" style={{'textAlign': 'center'}}>
          <h2>Guess the baby's gender</h2>
          <h4>Click on the boy or girl baby below to vote!</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img 
                src={baby_boy} 
                height="96" 
                alt="Boy" 
                onClick={this.handleVoteBoy}
              >
              </img>
              <ProgressBar progress={boyNumber} />
            </div>
            <div className="col-xs-2">
              <img 
               src={baby_girl} 
               height="96" 
               alt="Girl" 
               onClick={this.handleVoteGirl}
              >   
              </img>
              <ProgressBarGirl progress={girlNumber} />
            </div>
          </div>
           <Results />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      boyNumber: state.boyNumber,
      girlNumber: state.girlNumber,
      progress: 0
    };
  }
  
export default connect(mapStateToProps)(Voting);
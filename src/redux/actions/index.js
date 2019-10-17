import { ADD_ONE_BOY, ADD_ONE_GIRL } from "../constants/action-types";

export const voteAngular = () => {
    return {
      type: ADD_ONE_BOY
    }
  }
  export const voteReact = () => {
    return {
      type: ADD_ONE_GIRL
    }
  }


// export const ADD_ONE_BOY = 'ADD_ONE_BOY';
// export const ADD_ONE_GIRL = 'ADD_ONE_GIRL';
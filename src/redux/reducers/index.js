import { ADD_ONE_BOY, ADD_ONE_GIRL } from "../constants/action-types";

const initialState = {
  boyNumber: 0,
  girlNumber: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE_BOY:
      return {
        ...state,
        boyNumber: state.boyNumber + 1
      };
    case ADD_ONE_GIRL:
      return {
        ...state,
        girlNumber: state.girlNumber + 1
      };
    default:
      return state;
  }
}

export default reducer;
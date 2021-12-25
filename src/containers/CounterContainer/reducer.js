import { actionTypes } from "./constants";

const initialState = {
  name: "",
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLUS_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.MINUS_COUNTER:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;

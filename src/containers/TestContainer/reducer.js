import { actionTypes } from "./constants";

const initialState = {
  comment: "",
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };

    default:
      return state;
  }
};

export default testReducer;

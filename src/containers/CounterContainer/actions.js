import { actionTypes } from "./constants";

const minusCounter = () => {
  return {
    type: actionTypes.MINUS_COUNTER,
  };
};

const plusCounter = () => {
  return {
    type: actionTypes.PLUS_COUNTER,
  };
};

const setName = (payload) => {
  return {
    type: actionTypes.SET_NAME,
    payload,
  };
};

export { minusCounter, plusCounter, setName };

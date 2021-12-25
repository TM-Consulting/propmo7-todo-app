import { actionTypes } from "./constants";

const setComment = (payload) => {
  return {
    type: actionTypes.SET_COMMENT,
    payload,
  };
};

export { setComment };

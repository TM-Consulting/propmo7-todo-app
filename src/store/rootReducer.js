import { combineReducers } from "redux";
import counterReducer from "../containers/CounterContainer/reducer";

export default combineReducers({
  counterState: counterReducer,
});

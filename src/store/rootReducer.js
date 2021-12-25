import { combineReducers } from "redux";
import counterReducer from "../containers/CounterContainer/reducer";
import testReducer from "../containers/TestContainer/reducer";

export default combineReducers({
  counterState: counterReducer,
  testState: testReducer,
});

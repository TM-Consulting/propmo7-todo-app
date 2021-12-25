import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { plusCounter, minusCounter, setName } from "./actions";
const CounterContainer = () => {
  const dispatch = useDispatch();
  const counterData = useSelector((storeKamel) => storeKamel.counterState);
  const testData = useSelector((storeKamel) => storeKamel.testState);
  const handleClick = (e) => {
    switch (e.target.id) {
      case "minus":
        dispatch(minusCounter());
        break;

      case "plus":
        dispatch(plusCounter());
        break;

      default:
        break;
    }
  };
  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };
  return (
    <div>
      <button onClick={handleClick} id="minus">
        -
      </button>{" "}
      <span>{counterData.counter}</span>
      <button onClick={handleClick} id="plus">
        +
      </button>
      <div>
        <input
          type="text"
          placeholder="type your name"
          onChange={handleChange}
        />
        <h1>{testData.comment}</h1>
      </div>
    </div>
  );
};
export default CounterContainer;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setComment } from "./actions";
const TestContainer = () => {
  const dispatch = useDispatch();
  const testData = useSelector((storeKamel) => storeKamel.testState);

  const handleChange = (e) => {
    dispatch(setComment(e.target.value));
  };
  return (
    <div>
      <input type="text" placeholder="type your name" onChange={handleChange} />
      <h1>{testData.comment}</h1>
    </div>
  );
};
export default TestContainer;

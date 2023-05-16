import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({ type: "increment" });
  };

  const subBtn = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
    </div>
  );
};

export default Home;

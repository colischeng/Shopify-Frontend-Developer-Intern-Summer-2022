import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

const App = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { withdraw, deposit } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(1000)}>Withdraw</button>
    </div>
  );
};

export default App;

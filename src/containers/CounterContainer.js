import React from "react";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";
import { connect } from "react-redux";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  { increaseAsync, decreaseAsync }
)(CounterContainer);

import React from "react";
import { useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "../stores/counter";

function CounterActions() {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Arttır
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Azalt
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(6))}
        >
          6 Arttır
        </button>
      </div>
    </div>
  );
}
export default CounterActions;

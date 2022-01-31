import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from './state/counterReducer';

import * as actions from "./actions/actions";
// import { doIncrease, doReset } from "./actions/actions";


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}


export const CounterReducer = () => {

  const [state, dispatch] = useReducer( counterReducer, INITIAL_STATE );


  const handleClick = ( val: number ) => {
    dispatch( actions.doIncrease( val ) );
  }


  return (
    <>
      <h1>Counter Reducer: { state.counter }</h1>
      <button
        onClick={ () => handleClick(1) }
      >
        +1
      </button>
      <button
        onClick={ () => handleClick(5) }
      >
        +5
      </button>
      <button
        onClick={ () => handleClick(10) }
      >
        +10
      </button>
      <button
        onClick={ () => dispatch( actions.doReset() ) }
      >
        Reset
      </button>

      <pre>{ JSON.stringify(state)}</pre>
    </>
  )
}


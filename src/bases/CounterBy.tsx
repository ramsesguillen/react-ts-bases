
import { useState } from "react";

interface Props {
  initialValue?: number,
}

interface CounterState {
  counter: number;
  clicks: number;
}


export const CounterBy = ({ initialValue = 0}: Props ) => {

  const [ { clicks, counter }, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = ( val: number ) => {
    setCounter( ({ clicks, counter }) => ({
      counter: counter + val,
      clicks: clicks + 1
    }));
  }


  return (
    <>
      <h1>Counter: { counter }</h1>
      <h1>Clicks: { clicks }</h1>
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
    </>
  )
}


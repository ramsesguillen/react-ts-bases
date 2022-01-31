import { useEffect, useRef, useState } from "react";
import { useCounter } from '../hooks/useCounter';


interface Props {
  initialValue?: number
}


export const CounterHook = ({ initialValue = 15 }: Props ) => {


  const { counter, handleClick, elementToAnimate} = useCounter({
    maxCount: initialValue
  });

  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={ elementToAnimate }>{ counter }</h2>
      <button
        onClick={ handleClick }
      >
        +1
      </button>
    </>
  )
}


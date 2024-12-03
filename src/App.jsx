import Counter from "./Counter"
import React, { useState } from 'react'

function App() {
  let [count1, setCount1]=useState(0);
  let [count2, setCount2]=useState(0);
  let reset=()=>{
    setCount1(0);
    setCount2(0)
  }

  return (
    <>
     <Counter count={count1} setCount={setCount1}/>
     <hr/>
     <Counter  count={count2} setCount={setCount2}/>
     <button onClick={reset}>Reset</button>
    </>
  )
}

export default App

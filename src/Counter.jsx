

function Counter ({count, setCount}) {
  
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <br/>
      <button onClick={()=>count>0 && setCount(count-1)}>Decrease</button>

    </>
  )
}

export default Counter


// Without destructuring


// function Counter(props) {
//     return (
//       <>
//         <div>{props.count}</div>
//         <button onClick={() => props.setCount(props.count + 1)}>Increase</button>
//         <br />
//         <button onClick={() => props.count > 0 && props.setCount(props.count - 1)}>Decrease</button>
//       </>
//     );
//   }
  
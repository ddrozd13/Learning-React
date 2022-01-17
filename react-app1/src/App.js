import { useState } from "react";
import CurrentDate from "./components/CurrentDate";

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleOnClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className='red'>
      <div> Hello world {counter}</div>
      <CurrentDate prefix="This is your time" />
      <button onClick = {handleOnClick}>+1</button>
    </div>
  );
};

export default App;

import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "green";
  const text= isOn ? <h1 style={{ background: "green" }}>Hello, you are in</h1> : <h1 style={{ background: "red" }}>Goodbye</h1>

  return (
    <div>
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "OFF" : "ON"}
    </button>
      {text}
    </div>
  );

}

export default Toggle;

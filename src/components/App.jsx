import React, { useState } from "react";

function App() {

  // setInterval(Time, 1000); autoupdate time

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  
  function Time() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Time}>Get Time</button>
    </div>
  );
}

export default App;

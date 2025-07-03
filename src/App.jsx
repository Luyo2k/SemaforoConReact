import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [time, setTime] = useState(60);
  const [visible, setVisible] = useState(true);
  const [isYellow, setIsYellow] = useState(false);
  const [light, setLight] = useState("red");

  useEffect(() => {
    if (time == 0) {
      if (light === "red") {
        setLight("green");
        setTime(10); // tiempo para verde
      } else if (light === "green") {
        setLight("yellow");
        setTime(3); // tiempo para amarillo
      } else if (light === "yellow") {
        setLight("red");
        setTime(15); // tiempo para rojo
      }
      return;
    }

    const id = setTimeout(() => {
      setTime((prev) => prev - 1);
      return () => clearTimeout(id);
    }, 1000);
  }, [time]);

  return (
    <>
      <div className="traffic-light-container">
        <div className="traffic-light loading">
          <div
            className={`light red${light === "red" ? " active" : ""}`}
            id="red"
          ></div>
          <div
            className={`light yellow${light === "yellow" ? " active" : ""}`}
            id="yellow"
          ></div>
          <div
            className={`light green${light === "green" ? " active" : ""}`}
            id="green"
          ></div>
        </div>
        <div className="span">{time}</div>
        <div className="road">
          <div className="lane lane-1">
            <div className="car car--1"></div>
          </div>
          <div className="lane lane-2">
            <div className="car car--2"></div>
          </div>
          <div className="lane lane-2">
            <div className="car car--3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

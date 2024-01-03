// https://www.radix-ui.com/primitives/docs/components/slider
// https://codesandbox.io/p/devbox/rough-forest-tw5zv5?file=%2Fglobal.css%3A9%2C16
import { useEffect, useState } from "react";

import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

const MAX_DELTA_MINUTES = 180;

const timestampToStr = (timestamp: number) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

  // add a zero to the left of minutes/seconds "less than 10"
  minutes = minutes.slice(-2);
  seconds = seconds.slice(-2);

  return { time: `${hours}:${minutes}:${seconds}`, ampm };
};

function App() {
  const [deltaMinutes, setDeltaMinutes] = useState(5);
  const [currTime, setCurrTime] = useState(
    Date.now() + deltaMinutes * 60 * 1000
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1
        style={{
          color: "white",
          fontSize: "2em",
          display: "flex",
          width: "190px",
          justifyContent: "space-between",
        }}
      >
        <div>{timestampToStr(currTime).time}</div>

        <div
          style={{
            width: "50px",
            textAlign: "left",
          }}
        >
          {timestampToStr(currTime).ampm}
        </div>
      </h1>

      <div style={{ height: "2em" }} />

      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form>
          <Slider.Root
            className="SliderRoot"
            defaultValue={[deltaMinutes]}
            value={[deltaMinutes]}
            onValueChange={(value) => {
              setDeltaMinutes(value[0]);
              setCurrTime(Date.now() + value[0] * 60 * 1000);
            }}
            max={MAX_DELTA_MINUTES}
            step={1}
          >
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
        </form>

        <h2
          style={{
            color: "white",
            fontSize: "0.8em",
            marginTop: "1.6em",
            textAlign: "center",
          }}
        >
          {deltaMinutes} min. ahead
        </h2>

        <div style={{ height: "3.2em" }} />

        <button
          className="Button"
          onClick={() => {
            setDeltaMinutes(Math.round(Math.random() * MAX_DELTA_MINUTES));
            setCurrTime(Date.now() + deltaMinutes * 60 * 1000);
          }}
        >
          YOLO
        </button>
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import Tetris from "react-tetris";

import "./App.css";
import DisableScroll from "./DisableScroll";
import jackImg from "./assets/jack-attack-small.png";
import upbeatMusic from "./assets/upbeat.mp3";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio(upbeatMusic);
    audio.loop = true;
    if (hasStarted) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [hasStarted]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 5_000);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsVisible(true);

      const interval = setInterval(() => {
        setIsVisible(true);
      }, 45_000);

      return () => {
        clearInterval(interval);
      };
    }, 45_000);

    return () => {
      clearTimeout(timeout);
    };
  }, [hasStarted]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "800px",
        height: "90vh",
        position: "relative",
      }}
    >
      <h1>{"Murphy's Law Tetris"}</h1>
      {hasStarted == false && (
        <button
          onClick={() => {
            setHasStarted(true);
          }}
        >
          Start
        </button>
      )}
      {hasStarted && (
        <Tetris
          keyboardControls={{
            down: "MOVE_DOWN",
            left: "MOVE_LEFT",
            right: "MOVE_RIGHT",
            space: "HARD_DROP",
            z: "FLIP_COUNTERCLOCKWISE",
            x: "FLIP_CLOCKWISE",
            up: "FLIP_CLOCKWISE",
            p: "TOGGLE_PAUSE",
            c: "HOLD",
            shift: "HOLD",
          }}
        >
          {({ Gameboard, points, level, state, controller }) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Gameboard />

              <div style={{ width: "24px" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "180px",
                }}
              >
                <div>
                  <h3>Points: {points}</h3>
                </div>

                <div>
                  <h3>Level: {level}</h3>
                </div>

                <div style={{ height: "24px" }} />

                {state === "LOST" && (
                  <div>
                    <h2>Game Over</h2>
                    <button onClick={controller.restart}>New game</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </Tetris>
      )}
      {isVisible && (
        <img src={jackImg} alt="JackAttack" className="imageJack" />
      )}
      <DisableScroll />
    </div>
  );
}

export default App;

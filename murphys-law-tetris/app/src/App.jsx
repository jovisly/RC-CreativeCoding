// import { useState } from "react";
import Tetris from "react-tetris";

import "./App.css";
import DisableScroll from "./DisableScroll";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{"Murphy's Law Tetris"}</h1>
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
      <DisableScroll />
    </div>
  );
}

export default App;

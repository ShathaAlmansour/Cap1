import React, { useState } from "react";
import Board from "../Board";
import "./style.css";

function Start() {
  const [options, setOptions] = useState(null);

  return (
    <div className="backgroundStart">
      <div className="containerStart">
        <h1>Flip Card Game</h1>
        <div className="btnStart">
          {options === null ? (
            <>
              <button onClick={() => setOptions(6)}>Easy</button>
              <button onClick={() => setOptions(12)}>Medium</button>
              {/* <button onClick={() => setOptions(24)}>Hard</button> */}
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  const prevOptions = options;
                  setOptions(null);
                  setTimeout(() => {
                    setOptions(prevOptions);
                  }, 5);
                }}
              >
                Start Over
              </button>
              <button onClick={() => setOptions(null)}>Home</button>
            </>
          )}
        </div>
      </div>

      {options ? (
        <Board options={options} setOptions={setOptions} />
      ) : (
        <div className="instr">
          <h2>Let's Start!</h2>
          <p>
            Pic Flip™️ is a matching card game for 7-year-olds and up providing
            fast-paced fun that moves at the speed of flipping! Gameplay is so
            easy to understand, young kids can play independently. Kids will
            love flipping through their cards to find a match, then calling it
            out. The fastest flipper who gets rid of all their cards wins!
            Players practice focus, matching skills, and manual dexterity while
            having fun! Makes a great gift for kids 7 years and older, but no
            matter their age they'll want to play over and over again!
          </p>
        </div>
      )}
    </div>
  );
}

export default Start;

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Crafting Digital Dreams ",
          "with Front-End Flair ",
          "Balancing Family, Scoring Goals, Hitting Home Runs ",
          "and Acing Life on and off the Court! ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

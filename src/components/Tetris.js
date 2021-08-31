import React from "react";

import { createStage } from "../gameHelpers";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
const Tetris = ({ type }) => {
  return (
    <StyleTerrisWrapper>
      <StyleTerris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Row" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyleTerris>
    </StyleTerrisWrapper>
  );
};

export default Tetris;

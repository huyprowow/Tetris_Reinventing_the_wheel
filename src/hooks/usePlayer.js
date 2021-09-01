import { useState,useCallback } from "react";
import { STAGE_WIDTH } from "../gameHelpers";
import { TETROMINOS,randomTetromino } from "../tetrominos";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    //co the gui trang thai khoi tao vao tri=ong cap ngoac tron
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  //tuong duong voi:
  /* const playerState=useState({
        pos:{x:0,y:0},
        tetroino:TETROMINOS[0].shape,
    collided:false

    });
     const player=playerState[0];
     const setPlayer=playerState[1];*/

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(()=>{
      setPlayer({
          pos: { x: STAGE_WIDTH/2-2, y:0 },
          tetromino:randomTetromino().shape,
          collided: false,
      })
  },[])
  return [player,updatePlayerPos,resetPlayer];
};

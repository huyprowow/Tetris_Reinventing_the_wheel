import { useState, useCallback } from "react";
import { TETROMINOS, randomTetromino } from "../tetrominos";
import { STAGE_WIDTH, checkCollision } from "../gameHelpers";
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    //co the gui trang thai khoi tao vao trong cap ngoac tron
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

  function rotate(matrix, dir) {
    //direction
    //bien hang thanh cot (doi cho)
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    //dao nguoc moi hang de nhan dc matrix da xoay
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  };
  
  function playerRotate(stage, dir){
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);
    
    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }

    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);
  return [player, updatePlayerPos, resetPlayer, playerRotate];
};

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // Sử dụng vòng lặp for để có thể return (va break). Không thể với forEach
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      //1.kt xem co o tren 1 o(cell) tetromino thuc su k
      if (player.tetromino[y][x] !== 0) {
        if (
          //2.kt dang di chuyen o ben trong chieu cao kv choi k (y) k nen cho no di xuyen qua canh duoi
          !stage[y + player.pos.y + moveY] ||
          //3.ktra dang di chuyen o ben trong chieu rong kv choi k (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //4. ktra o(cell) dang di chuyen k dc thiet lap la 'clear' (cac o k rong k phai tetromino k va cham)
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5.ngoai ra thi la false
  return false;
};

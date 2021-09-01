export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      //1.kt xem co o tren 1 o(cell) tetromino thuc su k
      if (player.tetromino[y][x] !== 0) {
        //2.kt no co di ra ngoai chieu cao kv choi k (y)
        //k nen cho no di xuyen qua canh duoi
        //3.ktra cos di ra ngoai 2 ben chieu rong kv choi k x
        //4. ktra o(cell) dang dc k dc thiet lap la 'clear' (cac o k rong k phai tetromino)
      }
    }
  }
};

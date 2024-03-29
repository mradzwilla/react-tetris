export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[0].length; x += 1){
      // 1. Check that we're on actual tetromino cell
      if (player.tetromino[y][x] !== 0){
        if (
        // 2. Check that movement is inside game area height
        !stage[y + player.pos.y + moveY] ||
        // 3. Check horizontal collision
        !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        // 4. Check that cell we're moving to isn't set to clear
        stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        ){
          return true;
        }
      }
    }
  }
}

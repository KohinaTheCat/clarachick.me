export const start = (array) =>{
    real_solve_sudoku(array)
}

function solved(array) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (array[i][j] === 0) {return 0;}}}
  return 1;
}

function first_zero(array, x) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (array[i][j] === 0) {
        x.row = i;
        x.col = j;
        return;
      }}}
    x.flag = -1;
}

function real_solve_sudoku(array) {
  if (solved(array) === 0) {
    let x = {row: 0, col: 0, flag: 0}
    let nums = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    first_zero(array, x);

    for (let k = 0; k < 9; k++) {
      if (array[x.row][k] !== 0) nums[array[x.row][k] - 1] = 1;
      if (array[k][x.col] !== 0) nums[array[k][x.col] - 1] = 1;
    }

    for (let l = 3 * Math.floor(x.row / 3); l < 3 * Math.floor(x.row / 3) + 3; l++) {
      for (let m = 3 * Math.floor(x.col / 3); m < 3 * Math.floor(x.col / 3) + 3; m++) {
        nums[array[l][m] - 1] = 1; }}

    for (let b = 1; b < 10; b++) {
      if (nums[b - 1] === 0) {
          console.log(nums, b)
        array[x.row][x.col] =  b;
        real_solve_sudoku(array);
        first_zero(array, x);
        if (x.flag === -1) return;
        array[x.row][x.col] =  0;
    }}

    return;
  }
}
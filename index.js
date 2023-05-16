const gridSize = 20;
let matrix = [];

// Setting a zeros matrix
for (let i = 0; i < gridSize; i++) {
  let row = [];
  for (let j = 0; j < gridSize; j++) {
    let value = 0;
    row.push(value);
  }
  matrix.push(row);
}

// Setting another matrix filled with zeros with the same size
const numRows = matrix.length;
const numColumns = matrix[0].length;

let nextMatrix = [];

for (let i = 0; i < numRows; i++) {
  let row = [];
  for (let j = 0; j < numColumns; j++) {
    row.push(0);
  }
  nextMatrix.push(row);
}

// Some initial conditions for the sparkle of life
//Atention, this part is not responsive to the gridSize. Fix it
matrix[Math.floor(gridSize / 2)] = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0];

function calculateNextMatrix(matrix, nextMatrix, gridSize) {
  for (let i = 1; i < gridSize - 1; i++) {
    for (let j = 1; j < gridSize - 1; j++) {
      nextMatrix[i][j] = nextValue(i, j, matrix);
    }
  }
}

function checkNeighbors(i, j, matrix) {
  let neighbors =
    matrix[i - 1][j - 1] +
    matrix[i - 1][j] +
    matrix[i - 1][j + 1] +
    matrix[i + 1][j - 1] +
    matrix[i + 1][j] +
    matrix[i + 1][j + 1] +
    matrix[i][j - 1] +
    matrix[i][j + 1];
  return neighbors;
}

function nextValue(i, j, matrix) {
  let newValue = 0;
  if (
    matrix[i][j] === 1 &&
    (checkNeighbors(i, j, matrix) === 2 || checkNeighbors(i, j, matrix) === 3)
  ) {
    newValue = 1;
  } else if (matrix[i][j] === 0 && checkNeighbors(i, j, matrix) === 3) {
    newValue = 1;
  }
  return newValue;
}

// Refreshing matrix to the next iteration
function refreshMatrix(matrix, nextMatrix) {
  calculateNextMatrix(matrix, nextMatrix, gridSize);
  for (let i = 1; i < gridSize - 1; i++) {
    for (let j = 1; j < gridSize - 1; j++) {
      matrix[i][j] = nextMatrix[i][j];
    }
  }

  let grid = "";
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    grid = `${grid} ${matrix[i][j]}`;
  }
  grid = `${grid}
          teste`;
}

document.getElementById("tableGrid").innerHTML = grid;
}




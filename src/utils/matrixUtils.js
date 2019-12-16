const SIZE_PLAYING_FIELD = 9;
export const MAX_BOMBS_COUNT = 10;
export const IMAGE_BOMB = "💣";
function randomInteger() {
  const rand = 0 + Math.random() * (SIZE_PLAYING_FIELD - 1 + 1 - 0);
  return Math.floor(rand);
}

function generateBombPairs() {
  const pairs = new Set();
  while (pairs.size <= MAX_BOMBS_COUNT) {
    pairs.add(randomInteger() + ";" + randomInteger());
  }
  return pairs;
}

export const createMatrix = () => {
  const bombs = generateBombPairs();
  const matrix = [];

  while (matrix.length < SIZE_PLAYING_FIELD) {
    const line = ["", "", "", "", "", "", "", "", ""];
    matrix.push(line);
  }
  for (let pair of bombs) {
    const [x, y] = pair.split(";");
    matrix[x][y] = IMAGE_BOMB;
  }
  const result = arrangeNumbers(matrix);
  return result;
};

export const arrangeNumbers = matrix => {
  for (let x = 0; x < matrix.length; x++) {
    let line = matrix[x];
    for (let y = 0; y < line.length; y++) {
      if (matrix[x][y] !== IMAGE_BOMB) {
        let countBombs = 0;

        if (matrix[x - 1]) {
          if (matrix[x - 1][y - 1] === IMAGE_BOMB) {
            countBombs++;
          }
          if (matrix[x - 1][y] === IMAGE_BOMB) {
            countBombs++;
          }
          if (matrix[x - 1][y + 1] === IMAGE_BOMB) {
            countBombs++;
          }
        }

        if (matrix[x][y + 1] === IMAGE_BOMB) {
          countBombs++;
        }
        if (matrix[x + 1]) {
          if (matrix[x + 1][y + 1] === IMAGE_BOMB) {
            countBombs++;
          }

          if (matrix[x + 1][y] === IMAGE_BOMB) {
            countBombs++;
          }

          if (matrix[x + 1][y - 1] === IMAGE_BOMB) {
            countBombs++;
          }
        }
        if (matrix[x][y - 1] === IMAGE_BOMB) {
          countBombs++;
        }
        if (countBombs === 0) {
          matrix[x][y] = "";
        } else {
          matrix[x][y] = countBombs;
        }
      }
    }
  }
  return matrix;
};
export const transformMatrix = matrix => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      matrix[x][y] = { value: matrix[x][y], status: "closed", id: `${x} ${y}` };
    }
  }
  return matrix;
};

export const isClosedCellWithBomb = matrix => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (
        matrix[x][y].status === "closed" &&
        matrix[x][y].value !== IMAGE_BOMB
      ) {
        return true;
      }
    }
  }
  return false;
};

export const getFlaggetCellCount = matrix => {
  let countFlags = 0;
  matrix.forEach(line => {
    line.forEach(element => {
      if (element.status === "flagget") {
        countFlags++;
      }
    });
  });
  return countFlags;
};

import { arrangeNumbers } from "./matrixUtils.js";
import { IMAGE_BOMB } from "./matrixUtils";

test("testing", () => {
  expect(
    arrangeNumbers([
      [0, 0, IMAGE_BOMB],
      [IMAGE_BOMB, 0, 0],
      [0, 0, 0]
    ])
  ).toEqual([
    [1, 2, IMAGE_BOMB],
    [IMAGE_BOMB, 2, 1],
    [1, 1, ""]
  ]);
  expect(
    arrangeNumbers([
      [IMAGE_BOMB, 0, IMAGE_BOMB],
      [0, 0, 0],
      [IMAGE_BOMB, 0, IMAGE_BOMB]
    ])
  ).toEqual([
    [IMAGE_BOMB, 2, IMAGE_BOMB],
    [2, 4, 2],
    [IMAGE_BOMB, 2, IMAGE_BOMB]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      [0, IMAGE_BOMB, 0],
      [0, 0, 0]
    ])
  ).toEqual([
    [1, 1, 1],
    [1, IMAGE_BOMB, 1],
    [1, 1, 1]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, IMAGE_BOMB]
    ])
  ).toEqual([
    ["", "", ""],
    ["", 1, 1],
    ["", 1, IMAGE_BOMB]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      [IMAGE_BOMB, 0, IMAGE_BOMB],
      [0, IMAGE_BOMB, 0]
    ])
  ).toEqual([
    [1, 2, 1],
    [IMAGE_BOMB, 3, IMAGE_BOMB],
    [2, IMAGE_BOMB, 2]
  ]);
});

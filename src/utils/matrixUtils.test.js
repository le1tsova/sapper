import { arrangeNumbers } from "./matrixUtils.js";

test("testing", () => {
  expect(
    arrangeNumbers([
      [0, 0, "*"],
      ["*", 0, 0],
      [0, 0, 0]
    ])
  ).toEqual([
    [1, 2, "*"],
    ["*", 2, 1],
    [1, 1, 0]
  ]);
  expect(
    arrangeNumbers([
      ["*", 0, "*"],
      [0, 0, 0],
      ["*", 0, "*"]
    ])
  ).toEqual([
    ["*", 2, "*"],
    [2, 4, 2],
    ["*", 2, "*"]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      [0, "*", 0],
      [0, 0, 0]
    ])
  ).toEqual([
    [1, 1, 1],
    [1, "*", 1],
    [1, 1, 1]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, "*"]
    ])
  ).toEqual([
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, "*"]
  ]);
  expect(
    arrangeNumbers([
      [0, 0, 0],
      ["*", 0, "*"],
      [0, "*", 0]
    ])
  ).toEqual([
    [1, 2, 1],
    ["*", 3, "*"],
    [2, "*", 2]
  ]);
});

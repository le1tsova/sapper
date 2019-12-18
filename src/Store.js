import { observable, action } from "mobx";
import { createMatrix, transformMatrix } from "./utils/matrixUtils";
import { cloneDeep } from "lodash";
import { STATE_PLAY } from "./consts";

export default class Store {
  @observable gameStatus = STATE_PLAY;
  @observable matrix = [];

  @action setGameStatus = status => {
    this.gameStatus = status;
  };

  @action setStatusCell = (x, y, newStatus) => {
    const cloneMatrix = cloneDeep(this.matrix);
    cloneMatrix[x][y].status = newStatus;
    this.matrix = cloneMatrix;
  };

  @action newGame = () => {
    this.matrix = transformMatrix(createMatrix());
    this.gameStatus = STATE_PLAY;
  };
}

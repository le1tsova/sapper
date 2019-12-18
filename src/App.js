import React from "react";
import { observer } from "mobx-react";
import Game from "./components/Game";
import StatusGame from "./components/StatusGame";
import {
  CELL_FLAGGET,
  CELL_CLOSED,
  CELL_OPENED,
  STATE_LOSE,
  STATE_WIN,
  STATE_PLAY
} from "./consts";
import {
  IMAGE_BOMB,
  isClosedCellWithBomb,
  MAX_BOMBS_COUNT,
  getFlaggetCellCount
} from "./utils/matrixUtils";

@observer
class App extends React.Component {
  componentDidMount() {
    this.props.store.newGame();
  }

  openedCell = event => {
    const [x, y] = event.target.id.split(" ");

    const { store } = this.props;

    if (store.matrix[x][y].status === CELL_CLOSED) {
      store.setStatusCell(x, y, CELL_OPENED);

      if (store.matrix[x][y].value === IMAGE_BOMB) {
        store.setGameStatus(STATE_LOSE);
      }
    }

    if (!isClosedCellWithBomb(store.matrix)) {
      store.setGameStatus(STATE_WIN);
    }
  };

  setFlag = event => {
    event.preventDefault();

    const { store } = this.props;

    if (store.gameStatus !== STATE_PLAY) {
      return;
    }
    const [x, y] = event.target.id.split(" ");

    if (store.matrix[x][y].status === CELL_FLAGGET) {
      store.setStatusCell(x, y, CELL_CLOSED);
    } else {
      if (getFlaggetCellCount(store.matrix) >= MAX_BOMBS_COUNT) {
        return;
      }
      store.setStatusCell(x, y, CELL_FLAGGET);
    }
  };

  newGameClick = () => {
    this.props.store.newGame();
  };

  render() {
    const { gameStatus, matrix } = this.props.store;
    const isPlay = gameStatus === STATE_LOSE || gameStatus === STATE_WIN;

    return (
      <div className="App">
        <div className="game-panel">
          <button className="button__new-game" onClick={this.newGameClick}>
            New Game
          </button>
          <StatusGame status={gameStatus} />
        </div>

        <Game
          matrix={matrix}
          onClick={isPlay ? null : this.openedCell}
          onContextMenu={this.setFlag}
        />
      </div>
    );
  }
}

export default App;

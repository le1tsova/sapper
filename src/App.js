import React from "react";
import Game from "./Game";
import {
  createMatrix,
  transformMatrix,
  IMAGE_BOMB,
  isClosedCellWithBomb,
  MAX_BOMBS_COUNT,
  getFlaggetCellCount
} from "./utils/matrixUtils";
import { cloneDeep } from "lodash";
import StatusGame from "./StatusGame";

class App extends React.Component {
  state = {
    matrix: [],
    statusGame: ""
  };

  initState = () => {
    this.setState({
      matrix: transformMatrix(createMatrix()),
      statusGame: "play"
    });
  };

  componentDidMount() {
    this.initState();
  }

  openedCell = event => {
    const [x, y] = event.target.id.split(" ");
    const cloneMatrix = cloneDeep(this.state.matrix);

    if (cloneMatrix[x][y].status === "closed") {
      cloneMatrix[x][y].status = "opened";
      this.setState({ matrix: cloneMatrix });

      if (cloneMatrix[x][y].value === IMAGE_BOMB) {
        this.setState({ statusGame: "lose" });
      }
    }

    if (!isClosedCellWithBomb(this.state.matrix)) {
      this.setState({ statusGame: "win" });
    }
  };

  setFlag = event => {
    event.preventDefault();
    const [x, y] = event.target.id.split(" ");
    const cloneMatrix = cloneDeep(this.state.matrix);

    if (cloneMatrix[x][y].status === "flagget") {
      cloneMatrix[x][y].status = "closed";
    } else {
      if (getFlaggetCellCount(this.state.matrix) >= MAX_BOMBS_COUNT) {
        return;
      }
      cloneMatrix[x][y].status = "flagget";
    }

    this.setState({ matrix: cloneMatrix });
  };

  newGameClick = () => {
    this.initState();
  };

  render() {
    const isPlay =
      this.state.statusGame === "lose" || this.state.statusGame === "win";

    return (
      <div className="App">
        <StatusGame
          onClick={this.newGameClick}
          status={this.state.statusGame}
        />
        <Game
          matrix={this.state.matrix}
          onClick={isPlay ? null : this.openedCell}
          onContextMenu={this.setFlag}
        />
      </div>
    );
  }
}

export default App;

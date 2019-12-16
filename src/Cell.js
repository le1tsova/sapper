import React from "react";
import "./style.css";
export default class Cell extends React.Component {
  render() {
    return (
      <div className="square">
        {this.props.status === "opened" ? (
          this.props.value
        ) : (
          <button
            className="square__button"
            id={this.props.id}
            onClick={
              this.props.status === "flagget" ? null : this.props.onClick
            }
            onContextMenu={this.props.onContextMenu}
          >
            {this.props.status === "flagget" ? "☠️" : null}
          </button>
        )}
      </div>
    );
  }
}

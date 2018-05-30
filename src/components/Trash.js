import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  onTrashButtonClicked = () => {
    console.log("clicked");
    this.props.clickCallback(this.props.index);
  }

  render() {

    let display;
    if (this.props.isTrashVisible !== true) {
      display = 'empty';
    } else {
      display = 'trash';
    }

    return (
      <div onClick={ this.onTrashButtonClicked }className="bin">
      <img src={ TrashIcon } alt="Trash" className={display}></img>
      </div>
    );
  }
}

export default Trash;

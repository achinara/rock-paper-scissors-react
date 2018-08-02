import React, {Component} from 'react';
import Text from "../Text/Text";
import Board from '../Board/Board';
import {Pointers} from '../Pointers/Pointers';

class Moves extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {text} = this.props;
    return(
      <div>
        <Pointers {...this.props.point} />
        <Board/>
        <Text text={text}/>
      </div>
    )
  }
}

export default Moves;
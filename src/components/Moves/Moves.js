import React, {Component} from 'react';
import Text from "../Text/Text";
import {Board} from '../Board/Board';
import {Pointers} from '../Pointers/Pointers';

const Moves = ({texts, result, point}) => {
  return(
    <div>
      <Pointers result = {result} />
      <Board {...point}/>
      {texts.map((text, i, arr) => <Text text={text} key={i} className={!i && arr.length > 1 && 'text_blue'}/>)}
    </div>
  )
}

export default Moves;
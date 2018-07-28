import React, {Component} from 'react';
import Title from '../Pointers/Pointers';
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import Text from "../Text/Text";
import Board from '../Board/Board';
import Result from '../Result/Result';
import './Content.css';

class Content extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='content'>
        {/*<Button/>*/}
        {/*<Title/>*/}
        {/*<Board/>*/}
        {/*<Text text='Ты победил в этом туре!' className="text_blue"/>*/}
        {/*<Text text='Выбери свой вариант для продолжения!'/>*/}
        {/*<Preloader/>*/}
        <Result/>
      </div>
    )
  }
}

export default Content;
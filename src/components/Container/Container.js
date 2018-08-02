import React, {Component} from 'react';
import classnames from 'classnames';
import Artifacts from '../Artifacts/Artifacts';
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import Moves from "../Moves/Moves";
import Result from '../Result/Result';
import './Main.css';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameOn: false
    }

    this.steps = 0;
    this.levels = 5;

    this.texts = {
      redText: {
        start: 'Выбери свой вариант для начала игры!',
        continue: 'Выбери свой вариант для продолжения!'
      },
      blueText: {
        win: 'Ты победил в этом туре!',
        loss: 'Ты проиграл в этом туре (((',
        draw: 'В этом туре - ничья.'
      },
      resultText: {
        win: 'Ты победитель! Молодец!',
        loss: 'Проигрыш ('
      }
    }

    this.point = {
      user: 0,
      rival: 0,
      draw: false
    }
  }

  handleOnMove = (sign) => {
    if (!this.state.gameOn) return;

    this.steps++;
    this.setState({gameOn: false});

    const PAPER = 'paper',
          SCISSORS = 'scissors',
          ROCK = 'rock';
    
    const ranges = [
      PAPER, SCISSORS, ROCK
    ];

    const random = Math.floor(Math.random() * 3 );
    let result = 'loss';

    // paper and paper || scissors and scissors || rock and rock
    if (sign  === ranges[random]) {
      result = 'draw';
    }

    if (sign === PAPER && ranges[random] === ROCK) {
      result = 'win';
    }

    if (sign === SCISSORS && ranges[random] === PAPER) {
      result = 'win';
    }

    if (sign === ROCK && ranges[random] === SCISSORS) {
      result = 'win';
    }
    console.log(`'--- sign, ranges[random], random, result:'`, sign, ranges[random], random, result);
  }

  componentWillUpdate(nextProps, nextState) {
    const {steps, levels} = this;
    const {redText, blueText, resultText} = this.texts;

    if (!steps) this.showtext = redText.start;
    if (steps && steps < levels) this.showtext = redText.continue;
  }


  render() {

    const {gameOn} = this.state;

    const getBody = () => {
      const {steps, levels} = this;
      if (!gameOn && !steps) return <Button onClick = {() => this.setState({gameOn: true})}/>;
      if (!gameOn && steps) return <Preloader/>;
      if (gameOn) return <Moves point={this.point} text={this.showtext}/>;
    };

    const rootClassName = classnames('container', {'_moves':gameOn});
    return(
      <div className={rootClassName}>
        <Artifacts handleMove = {this.handleOnMove}/>
        <div className='content'>
          {getBody()}
        </div>
      </div>
    )
  }
}

export default Container;
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
      gameOn: false,
      preloadOn: false
    }

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

    this.count = 5; //count of levels
    this.passed = 0; //passed levels
    this.levelsColors = [
      'blue',
      'green',
      'yell',
      'orange',
      'red'
    ];

    this.point = {
      win: ['','','','',''],
      loss: ['','','','',''],
      levels: this.levelsColors,
      signRival: '',
      signUser: ''
    };

    this.result = '';
  }

  handleOnMove = (signUser) => {
    if (!this.state.gameOn) return;

    this.setState({gameOn: false, preloadOn: true});

    const PAPER = 'paper',
          SCISSORS = 'scissors',
          ROCK = 'rock';
    
    const ranges = [
      PAPER, SCISSORS, ROCK
    ];

    const total = [
      'loss', 'win', 'draw'
    ];

    const random = Math.floor(Math.random() * 3 );
    const signRival = ranges[random];

    this.stopPreloader();

    // consider, result has loss

    let result = total[0];
    let {passed, count, point } = this;

    if (signUser  === signRival) {
      result = total[2];
      point.draw = true;
    }

    if (signUser === PAPER && signRival === ROCK) {
      result = total[1];
    }

    if (signUser === SCISSORS && signRival === PAPER) {
      result = total[1];
    }

    if (signUser === ROCK && signRival === SCISSORS) {
      result = total[1];
    }

    if (result === total[1] || result === total[0]) {
      passed++;
      point[result][count - passed] = point.levels[passed-1];
      point.levels[passed-1] = '';
      point.draw = false;
    }

    point.signRival = signRival;
    point.signUser = signUser;
    this.result = result;
    this.passed = passed;
    this.point = point;
  }

  stopPreloader = () => {
    this.timer = setTimeout(()=> {
      this.setState({
        gameOn: true, preloadOn: false
      })
    }, 2000)
  }

  componentWillUpdate(nextProps, nextState) {
    const {redText, blueText, resultText} = this.texts;
    this.showTexts = [redText.start];

    // if (steps && levels) {
    //   this.showTexts = [blueText[this.result],redText.continue];
    // }
  }

  render() {
    const {gameOn, preloadOn} = this.state;

    const getBody = () => {
      if (!gameOn && !preloadOn) return <Button onClick = {() => this.setState({gameOn: true})}/>;
      if (preloadOn) return <Preloader/>;
      if (gameOn) return <Moves point={this.point} texts={this.showTexts} result={this.result}/>;
      return <Result/>
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
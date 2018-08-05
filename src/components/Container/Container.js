import React, {Component} from 'react';
import classnames from 'classnames';
import Artifacts from '../Artifacts/Artifacts';
import Preloader from "../Preloader/Preloader";
import Moves from "../Moves/Moves";
import Footer from '../Footer/Footer';
import './Main.css';

class Container extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameOn: true,
      preloadOn: false,
      finish: false
    }

    this.texts = {
      redText: {
        start: 'Выберите свой вариант для начала игры!',
        continue: 'Выберите вариант для продолжения!',
        finish: 'Пройдены все туры.'
      },
      blueText: {
        win: 'Вы победили в этом туре!',
        loss: 'Вы проиграли в этом туре ((',
        draw: 'В этом туре - ничья.'
      },
      resultText: {
        win: 'Победа!',
        loss: 'Проигрыш.'
      }
    }

    this.colors = [
      'blue',
      'green',
      'yell',
      'orange',
      'red'
    ];

    this.count = 5; //count of levels
    this.setDefault();
  }

  setDefault = () => {
    this.passed = 0; //passed levels
    this.result = '';

    this.point = {
      win: ['','','','',''],
      loss: ['','','','',''],
      levels: [...this.colors],
      signRival: '',
      signUser: ''
    };
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

    // consider, result is loss
    let result = total[0];
    let {passed, count, point } = this;

    // result is loss
    if (signUser  === signRival) {
      result = total[2];
      point.draw = true;
    }

    // result is win
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

    this.stopPreloader(count !== passed);
  }

  stopPreloader = (isGameOn) => {
    this.timer = setTimeout(()=> {
      this.setState({
        gameOn: isGameOn, preloadOn: false, finish: !isGameOn
      })
    }, 800)
  }

  onReload = () => {
    this.setDefault();
    this.setState({
      gameOn: true,
      preloadOn: false,
      finish: false
    });
  }

  componentWillMount() {
    this.contentTexts = [this.texts.redText.start];
  }

  componentWillUpdate() {
    const {redText, blueText} = this.texts;
    const {passed, count, result} = this;
    const note = (count !== passed) ? 'continue' : 'finish';
    this.contentTexts = [blueText[result], redText[note]];
  }

  render() {
    const {gameOn, preloadOn, finish} = this.state;
    const {point, result, contentTexts, count} = this;

    const getContent = () => {
      if (preloadOn) return <Preloader/>;
      return <Moves point={point} texts={contentTexts} result={result}/>;
    };
    
    const getFooter = () => {
      const res = point.win.filter(item => item !== '').length,
        text = res > count/2 ? 'win' : 'loss',
        resultText = this.texts.resultText[text];

      return <Footer text={resultText} value={`${res} : ${count - res}`} onClick={this.onReload}/>
    };

    const rootClassName = classnames('container', {'_moves': gameOn});
    return(
      <div className={rootClassName}>
        <Artifacts handleMove = {this.handleOnMove}/>
        <div className='content'>
          {getContent()}
        </div>
        {finish && getFooter()}
      </div>
    )
  }
}

export default Container;
import {colorModificators, countTours} from './constants';

const setResultTour = (signUser, obj) => {
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
  let {passed, point } = obj;

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
    point[result][countTours - passed] = point.levels[passed-1];
    point.levels[passed-1] = '';
    point.draw = false;
  }

  point.signRival = signRival;
  point.signUser = signUser;
  obj.result = result;
  obj.passed = passed;
  obj.point = point;
}

const setDefault = (obj) => {
  obj.passed = 0; //passed levels
  obj.result = '';

  obj.point = {
    win: ['','','','',''],
    loss: ['','','','',''],
    levels: [...colorModificators],
    signRival: '',
    signUser: ''
  };
}

export {setResultTour, setDefault};
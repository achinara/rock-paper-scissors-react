const texts = {
  start: 'Выберите свой вариант для начала игры!',
  continue: 'Выберите вариант для продолжения!',
  finish: 'Пройдены все туры.',

  win: 'Вы победили в этом туре!',
  loss: 'Вы проиграли в этом туре ((',
  draw: 'В этом туре - ничья.',

  resultText: {
    win: 'Победа!',
    loss: 'Проигрыш.'
  }
};

const countTours = 5; //count of levels

const colorModificators = [
  'blue',
  'green',
  'yell',
  'orange',
  'red'
];

export {texts, colorModificators, countTours};
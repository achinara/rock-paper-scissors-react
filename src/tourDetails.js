import {colorModificators} from './constants';

export default {
  passed : 0,
  result: '',
  contentTexts: '',
  point: {
    win: ['','','','',''],
    loss: ['','','','',''],
    levels: [...colorModificators],
    signRival: '',
    signUser: ''
  }
}
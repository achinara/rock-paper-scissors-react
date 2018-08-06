import React, {Component} from 'react';
import classnames from 'classnames';
import {texts, countTours} from '../../constants';
import {handleOnMove, setDefault} from '../../helper';
import tourDetails from '../../tourDetails';
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
  }

  handleOnMove = (signUser) => {
    if (!this.state.gameOn) return;
    this.setState({gameOn: false, preloadOn: true});

    handleOnMove(signUser, tourDetails, this.stopPreloader);
  };

  stopPreloader = (isGameOn) => {
    this.timer = setTimeout(()=> {
      this.setState({
        gameOn: isGameOn, preloadOn: false, finish: !isGameOn
      })
    }, 800)
  };

  onReload = () => {
    setDefault();
    this.setState({
      gameOn: true,
      preloadOn: false,
      finish: false
    });
  };

  componentWillMount() {
    tourDetails.contentTexts = [texts.start];
  }

  componentWillUpdate() {
    const {passed, result} = tourDetails;
    const note = (countTours !== passed) ? 'continue' : 'finish';
    tourDetails.contentTexts = [texts[result], texts[note]];
  }

  getContent = () => {
    const {point, result, contentTexts} = tourDetails;
    if (this.state.preloadOn) return <Preloader/>;
    return <Moves point={point} texts={contentTexts} result={result}/>;
  };

  getFooter = () => {
    if (!this.state.finish) return;
    const {point} = tourDetails;
    const res = point.win.filter(item => item !== '').length,
      text = res > countTours/2 ? 'win' : 'loss',
      resultText = texts.resultText[text];

    return <Footer text={resultText} value={`${res} : ${countTours - res}`} onClick={this.onReload}/>
  };

  render() {
    const rootClassName = classnames('container', {'_moves': this.state.gameOn});
    return(
      <div className={rootClassName}>
        <Artifacts handleMove = {this.handleOnMove}/>
        <div className='content'>
          {this.getContent()}
        </div>
        {this.getFooter()}
      </div>
    )
  }
}

export default Container;
import React, { Component } from 'react';
import 'normalize.css';

import Container from './components/Container/Container';
import {setResultTour, setDefault} from './helper';
import {countTours, texts} from "./constants";
import tourDetails from "./tourDetails";


class App extends Component {
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
    this.setState({gameOn: false});

    this.timer = setTimeout(()=> {
      setResultTour(signUser, tourDetails);

      const isFinish = countTours !== tourDetails.passed;

      this.setState({
        gameOn: isFinish, preloadOn: false, finish: !isFinish
      })
    }, 1000)

  };

  onReload = () => {
    setDefault(tourDetails);
    this.setState({
      gameOn: true,
      preloadOn: false,
      finish: false
    });
  };

  componentWillMount() {
    tourDetails.contentTexts = [texts.start];
  }

  componentWillUpdate(nextProps, nextState) {
    if(!nextState.gameOn && !nextState.finish) return;
    const {passed, result} = tourDetails;
    const note = (countTours !== passed) ? 'continue' : 'finish';
    tourDetails.contentTexts = [texts[result], texts[note]];
  }

  render() {
    return (
      <Container {...this.state} tourDetails={tourDetails} handleOnMove={this.handleOnMove} onReload={this.onReload}/>
    );
  }
}

export default App;

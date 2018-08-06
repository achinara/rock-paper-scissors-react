import React, { Component } from 'react';
import 'normalize.css';

import Container from './components/Container/Container';
import {handleOnMove, setDefault} from './helper';
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

  componentWillUpdate() {
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

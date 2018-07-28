import React, {Component} from 'react';
import Artifacts from '../Artifacts/Artifacts';
import Title from '../Pointers/Pointers';
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import Text from "../Text/Text";
import Board from '../Board/Board';
import Result from '../Result/Result';
import './Main.css';

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      noActArtifact: false,
      pages: {
        start: true
      }

    }
  }

  handleClick = () => {
    this.setState({
      start: false
    })
  }


  render() {
    const {noActArtifact, start} = this.state;

    return(
      <div className={noActArtifact ? 'lets_go container' : 'container'}>
        <Artifacts/>
        <div className='content'>
          {start && <Button click={this.handleClick}/>}
          {!start && <Preloader/>}
        </div>
      </div>
    )
  }
}

export default Container;
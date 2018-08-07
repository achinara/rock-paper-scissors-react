import React from 'react';
import classnames from 'classnames';
import {texts, countTours} from '../../constants';
import Artifacts from '../Artifacts/Artifacts';
import Preloader from "../Preloader/Preloader";
import Moves from "../Moves/Moves";
import Footer from '../Footer/Footer';
import './Main.css';

const Container = ({tourDetails={}, preloadOn=false, gameOn=true, finish=false, handleOnMove=f=>f, onReload=f=>f}) => {

  const getContent = () => {
    const {point, result, contentTexts} = tourDetails;
    if (preloadOn) return <Preloader/>;
    return <Moves point={point} texts={contentTexts} result={result}/>;
  };

  const getFooter = () => {
    if (!finish) return;

    const {point} = tourDetails;
    const res = point.win.filter(item => item !== '').length,
      text = res > countTours/2 ? 'win' : 'loss',
      resultText = texts.resultText[text];

    return <Footer text={resultText} value={`${res} : ${countTours - res}`} onClick={onReload}/>
  };

  const rootClassName = classnames('container', {'_moves': gameOn}, {'_anim': !gameOn});

  return(
    <div className={rootClassName}>
      <Artifacts handleMove = {handleOnMove}/>
      <div className='content'>
        {getContent()}
      </div>
      {getFooter()}
    </div>
  )
}

export default Container;
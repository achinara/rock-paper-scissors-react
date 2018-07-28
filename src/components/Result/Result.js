import React, {Component} from 'react';
import Text from '../Text/Text';
import './Result.css'
import Button from "../Button/Button";

class Result extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='result'>
        <Text className='result__text' text='Вы победили!!!'/>
        <Text className='result__value' text='3 : 2'/>
        <Button className='result__repeat'/>
      </div>
    )
  }
}

export default Result;
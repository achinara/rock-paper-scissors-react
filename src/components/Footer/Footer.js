import React from 'react';
import Text from '../Text/Text';
import Button from "../Button/Button";
import './Footer.css';

const Footer = ({text='', value=''}) => {
  return(
    <div className='footer'>
      <div className='footer__left'>
        <Text className='footer__text' text={text}/>
        <Text className='footer__value' text={value}/>
      </div>
      <Button className='footer_button' text='Играть снова'/>
    </div>
  )
}

export default Footer;
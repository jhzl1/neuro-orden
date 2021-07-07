import React from 'react';
import '../App.css';
import { Button } from './Button';


function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>Aeroven</h1>
      <p>Javier Maneiro es el duro</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
       Vuela con nosotros
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

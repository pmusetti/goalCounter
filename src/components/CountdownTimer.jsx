import {React, useState} from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chrono from './Chrono';
import '../App.css';

const CountdownTimer = (targetDate) => {
    
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds <= 0) {
    return <div className='timerContainer'><span className='timer msg'>FIN DEL PARTIDO!</span> </div>;
  } else {
    return (
      <Chrono
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountdownTimer;

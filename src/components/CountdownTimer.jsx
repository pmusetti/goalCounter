import {React} from 'react';
import { useCountdown } from '../hooks/useCountdown';
import Chrono from './Chrono';
import '../App.css';

const CountdownTimer = (targetDate) => {
    
  const [minutes, seconds] = useCountdown(targetDate);
  
  if (minutes + seconds <= 0) {
    return <span>Game Over</span>;
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

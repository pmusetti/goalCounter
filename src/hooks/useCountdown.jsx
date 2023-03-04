import { useEffect, useState } from 'react';

const useCountdown = ({matchFinishTime, matchTime}) => {
  
  const [newMatchFinishTime, setNewMatchFinishTime] = useState(0);
  let targetTime = 0;

  if (matchFinishTime > newMatchFinishTime){
    targetTime = matchFinishTime;
  }else{
    targetTime = newMatchFinishTime;
  }

  const initTimer = (event) => {
    if(event.key == "2"){
      let timer = new Date().getTime();
        setNewMatchFinishTime(timer + matchTime + 2000)
    }
}
useEffect(()=>{
    window.addEventListener('keydown', initTimer);
    return () => {
        window.removeEventListener('keydown', initTimer);
      }
})

  const countDownDate = new Date(targetTime).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  if(seconds < 0){minutes = "00"}
  if(minutes < 10){minutes = "0" + minutes}
  if(seconds < 0){seconds = "00"}
  if(seconds < 10){seconds = "0" + seconds}
  return [minutes, seconds];
};

export { useCountdown };

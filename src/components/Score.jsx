import {React, useState, useEffect} from 'react';
import Counter from "./Counter";

function Score() {

    const [localScore, setLocalScore] = useState(0);
    const [visitScore, setVisitScore] = useState(0);
    
    const goalCounter = (event) =>{
        switch (event.key) {
            case '2':   
                setVisitScore(0);
                setLocalScore(0);
            break;
                case '7': setLocalScore(localScore + 1);
                    break;
                case '1': 
                    if(localScore > 0){
                        setLocalScore(localScore - 1);
                    }
                    
                    break;
                case '9': setVisitScore(visitScore + 1);
                   
                    break;
                case '3': 
                    if(visitScore > 0){
                        setVisitScore(visitScore - 1);
                }
                    
                    break;
                case '5': 
                    setVisitScore(0);
                    setLocalScore(0);
                    break;
                default:
                    break;
               }
    }
    useEffect(()=>{
        window.addEventListener('keydown', goalCounter);
        return () => {
            window.removeEventListener('keydown', goalCounter);
          }
    })
    return(

        <div className='counterContainer'>
            <Counter localScore={String(localScore).padStart(2, '0')} visitScore={String(visitScore).padStart(2, '0')}/>
        </div>
    )
}

export default Score

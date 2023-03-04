import {React, useState, useRef, useEffect} from 'react'
import Score from "./Score"
import Chrono from "./Chrono"

function Main() {
    const [localScore, setLocalScore] = useState(11);
    const [visitScore, setVisitScore] = useState(22);
    
    const goalCounter = (event)=>{
       switch (event.key) {
        case '7': setLocalScore(localScore + 1);
            break;
        case '1': setLocalScore(localScore - 1);
            
            break;
        case '9': setVisitScore(visitScore + 1);
           
            break;
        case '3': setVisitScore(visitScore - 1);
            
            break;
        case '5': 
            setVisitScore(0);
            setLocalScore(0);
            break;
        default:
            break;
       }
    }
    return(
        <div tabIndex={-1} onKeyDown={(e)=>{goalCounter(e)}} >
            <Score local={localScore} visit={visitScore}/>
            <Chrono/>
        </div>
    )
}

export default Main

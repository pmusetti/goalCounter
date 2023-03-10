import {React, useState, useRef, useEffect} from 'react'
import Score from "./Score"
import CountdownTimer from './CountdownTimer';


function Main() {
    const matchTime = 10 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const matchFinishTime = NOW_IN_MS + matchTime; 
    console.log("render CountdownTimer & Score")
    
    return(
        <div>
            <Score />
            <CountdownTimer matchFinishTime={matchFinishTime} matchTime = {matchTime}/>
        </div>
    )
}

export default Main

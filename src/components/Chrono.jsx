import React from 'react';

function Chrono({minutes,seconds}) {
    
    return(
        <div className='timerContainer'>
            <span className='timer'>{minutes}:{seconds}</span> 
        </div>
    )
}

export default Chrono

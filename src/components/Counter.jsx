import React from 'react';

function Counter({localScore, visitScore}) {

    return(
       <div className='scoreContainer'>
           <span className='score'>{localScore} - {visitScore}</span> 
       </div> 
            
            
    
    )
}

export default Counter

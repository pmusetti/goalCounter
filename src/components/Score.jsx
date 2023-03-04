import {React, useState} from 'react';
import Counter from "./Counter";

function Score({local, visit}) {
    
    return(

        <div >

        <Counter count={local}/>
        <span> - </span>
        <Counter count={visit}/>

    </div>
    )
}

export default Score

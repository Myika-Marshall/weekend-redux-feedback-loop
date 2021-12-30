import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Understanding (){
    console.log('in understanding');
    const [understanding, setUnderstanding] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleUnderstanding = (event) => {
        event.preventDefault();
        if (understanding < 1 || understanding <= 5){
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understanding
        })
        history.push('/supported');
        }
        else {
            alert('Please enter a number from 1-5')
        }
    }

    return (
    <div className='App'>
        <header className='App-header'>
        <h1 className='App-title'> How well are you understanding the content?</h1>
        <input
            type="number"
            required
            placeholder="Rate on a scale of 1-5"
            value={understanding}
            onChange={(event) => setUnderstanding(event.target.value)}>
        </input>
        <button onClick={handleUnderstanding}>Next</button>
    </header>
    </div>
    )
};

export default Understanding;
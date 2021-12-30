import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling (){
    console.log('in feeling');
    const [feeling, setFeeling] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeeling = (event) => {
    event.preventDefault();
    if (feeling < 1 || feeling <= 5){
        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        })
        history.push('/understanding');
    }
    else {
        alert('Please enter a number from 1-5')
    }
    }
    return (
    <div className='App'>
        <header className='App-header'>
        <h1 className='App-title'> How are you feeling today?</h1>
        <input
            type="number"
            required
            placeholder="Rate on a scale of 1-5"
            value={feeling}
            onChange={(event) => setFeeling(event.target.value)}>
        </input>
        <button onClick={handleFeeling}>Next</button>
    </header>
    </div>
    )
}

export default Feeling;

import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Supported (){
    console.log('in supported');
    const [supported, setSupported] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSupported = (event) => {
        event.preventDefault();
        if (supported < 1 || supported <= 5){
            dispatch({
                type: 'SET_SUPPORTED',
                payload: supported
        })
        history.push('/comment');
        }
        else {
            alert('Please enter a number from 1-5')
        }
    }

    return (
    <div className='App'>
        <header className='App-header'>
        <h1 className='App-title'> How well are you being supported?</h1>
        <input
            type="number"
            required
            placeholder="Rate on a scale of 1-5"
            value={supported}
            onChange={(event) => setSupported(event.target.value)}>
        </input>
        <button onClick={handleSupported}>Next</button>
    </header>
    </div>
    )
};

export default Supported;
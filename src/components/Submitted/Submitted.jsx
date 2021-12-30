import React from 'react';
import { useHistory } from 'react-router-dom';

function Submitted(){
    const history= useHistory()
    
    const completedFeedback = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>You have successfully Completed Your Feedback!</h2>
            <br/>
            <h3>Thank you for your submission!</h3>
        <button onClick={completedFeedback}>Leave Additional Feedback</button>

        </div> 
    )
}

export default Submitted;
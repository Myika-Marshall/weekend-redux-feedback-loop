import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Comment () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment]= useState('');

    const handleComment = () => {
        console.log('in comment:', comment);
        dispatch({
                type: 'SET_COMMENT',
                payload: comment
            })
            history.push('/review');
        }
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments: </p>
            <input 
            type='text'
            value= {comment}
            placeholder='Please share any comments you might have here!'
            onChange={(event)=>{setComment(event.target.value)}}/>
            <button onClick={handleComment}>Next</button>
        </div>
    
    )
}

export default Comment;
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'


function Comment () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments]= useState('');

    const handleComment = () => {
        console.log('in comment:', comments);
        dispatch({
                type: 'SET_COMMENT',
                payload: comments
            })
            history.push('/review');
        }
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments: </p>
            <input 
            type='text'
            value= {comments}
            placeholder='Please share any comments you might have here!'
            onChange={(event)=>{setComments(event.target.value)}}/>
            <button onClick={handleComment}>Next</button>
        </div>
    
    )
}

export default Comment;
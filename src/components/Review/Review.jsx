import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios'
import {useHistory} from 'react-router-dom';

function Review (){
    const history = useHistory();
    
// Reducers


    const feeling = useSelector((store)=> store.feelingReducer);
    const understanding = useSelector((store)=> store.understandingReducer);
    const support = useSelector((store)=> store.supportReducer);
    const comment = useSelector((store)=> store.commentReducer);
    
    // const feedback = 
    
    const submittedFeedback = () => {
        console.log('Submitting Feedback:', feeling)
        axios ({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling.feeling, 
                understanding: understanding.understanding, 
                support: support.support, 
                comment: comment.comment
            }
        }).then ((response)=> {
            console.log('in submitted feedback review', response);
        }).catch((error)=>{
            console.log('error in POST review', error);
        })
            history.push('/submitted')
        }
    return (
        <div>
            <h2>Review Your Feedback</h2>
                <p>Feeling: {feeling.feeling}</p>
                <p>Understanding: {understanding.understanding}</p>
                <p>Support: {support.support}</p>
                <p>Comments: {comment.comment}</p>
            <button onClick= {submittedFeedback}>Submit!</button>
        </div>
    )
    
}   

export default Review;

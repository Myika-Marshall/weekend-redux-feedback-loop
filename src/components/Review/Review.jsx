import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Review (){
    const history = useHistory();
    const dispatch = useDispatch();
    
// Reducers


    const feeling = useSelector((store)=> store.feelingReducer);
    const understanding = useSelector((store)=> store.understandingReducer);
    const support = useSelector((store)=> store.supportReducer);
    const comment = useSelector((store)=> store.commentReducer);
    const feedback = [feeling, understanding, support, comment];
    
    const submittedFeedback = () => {
        console.log('Submitting Feedback:', feeling)
        axios ({
            method: 'POST',
            url: '/feedback',
            data: feedback
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

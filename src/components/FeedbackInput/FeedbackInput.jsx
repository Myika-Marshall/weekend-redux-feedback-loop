import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

import './FeedbackInput.css'

function FeedbackInput() {
    const [feelingsInput, setFeelingsInput] = useState('');
    const [understandingInput, setUnderstandingInput] = useState('');
    const [supportedInput, setSupportedInput] = useState('');
    const [commentsInput, setCommentsInput] = useState('');
    const [dateInput, setDate] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const feedbackData = {
        feeling: feelingsInput,
        understanding: understandingInput,
        support: supportedInput,
        comments: commentsInput,
        date: dateInput
    }

    console.log('Feedback Input is:', FeedbackInput)

    dispatch({
        type: 'ADD_FEEDBACK',
        payload: feedbackData
    })
    
    return
    <Fragment>
        <text> state.question" </text>
        <text> state.prompt </text>
        <text> state.numberinput </text>
        <text> state.buttontext</text>
    </Fragment>


    }


export default FeedbackInput;
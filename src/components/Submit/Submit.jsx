import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function SubmitFeedback() {
    console.log('inside SubmitFeedback');
    const customer = useSelector((state) => state.customerReducer);
    const history = useHistory();

    function getTotalPrice(cart){
        let total = 0;
        for(let pizza of cart){
            total += Number(pizza.price);
        };
        return total;
    };

export default Submit;
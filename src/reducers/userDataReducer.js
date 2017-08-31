'use strict';

import axios from 'axios';
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function userDataReducer(state = initialState.userData, action) {
    if (action.type === types.RECEIVE_USER) { 
        return Object.assign({}, state, {
            userData: action.payload.userData
        });
    }
    return state;
}



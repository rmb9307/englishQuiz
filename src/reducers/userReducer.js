'use strict';

import axios from 'axios';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { login } from '../actions/userActions';


export default function userReducer(state = initialState.user, action) {
    if (action.type === types.LOGIN) {
        return action.payload.email;
    }
    else if (action.type === types.LOGOUT) {
        return null;
    }
    else if (action.type === types.SIGNUP) {  //TODO come back to this to fix
        return Object.assign({}, state, {
            user: action.payload.email
        });
    }
    return state;
}



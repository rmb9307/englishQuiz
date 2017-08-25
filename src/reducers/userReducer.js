'use strict';

import axios from 'axios';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { login } from '../actions/userActions';


export default function userReducer(state = initialState.user, action) {
    if (action.type === types.LOGIN) {
        return Object.assign({}, state, {
            user: action.payload.email
        });
    }
    else if (action.type === types.LOGOUT) {
        return Object.assign({}, state, {
            user: null
        });
    }
    else if (action.type === types.SIGNUP) {
        return Object.assign({}, state, {
            user: action.payload.email
        });
    }
    return state;
}

'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function quizReducer(state = initialState.quiz, action) {
    switch(action.type) {

        case types.SET_QUIZ:
            return [
                ...state,
                Object.assign({}, action.payload.quiz)
            ];
            
        default:
            return state;
    }
}
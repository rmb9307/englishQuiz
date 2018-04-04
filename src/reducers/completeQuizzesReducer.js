'use strict';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function completeQuizzesReducer(state = initialState.completeQuizzes, action) {
    switch(action.type) {
        case types.RECEIVE_COMPLETE_QUIZZES:
            return [
                ...state,
                Object.assign({}, action.payload.completeQuizzes)
            ];
        default:
            return state;
    }
}
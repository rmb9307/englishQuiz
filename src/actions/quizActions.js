'use strict';

import * as types from './actionTypes';
import { partsOfSpeech } from '../data/quizQuestions';
import axios from 'axios';

// Action Creators:
export function setQuiz(quiz) {
    return {
        type: types.SET_QUIZ, 
        payload: {
            quiz
        }
    };
}

export function receiveCompleteQuizzes (completeQuizzes) {
    return {
        type: types.RECEIVE_COMPLETE_QUIZZES,
        payload: {
            completeQuizzes
        }
    };
};

export const storeResult = (task, score, outOf, user)  => {
    let endpoint = '/api/user/' + user;
    axios.get(endpoint)
        .then(response => {
            return response.data;
        })
        .then(data => {
            const userId = data.id;
            axios.post('/api/task', { task, score, outOf, userId })
                .then(response => {
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        });
};

export const getQuizzesByUser = (email) =>  (dispatch) => {
    let endpoint = '/api/user/' + email;
    axios.get(endpoint)
        .then(response => {
            return response.data;
        })
        .then(data => {
            endpoint = '/api/task/' + data.id;
            axios.get(endpoint)
                .then(response => {
                    console.log('getQuizzesByUser response: ', response.data);
                    dispatch(receiveCompleteQuizzes(response.data));
                })
                .catch(err => {
                    console.log(err)
                });
        });
};
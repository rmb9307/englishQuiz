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



export const storeResult = (task, score, outOf)  => {
    axios.post('/api/task', { task, score, outOf })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
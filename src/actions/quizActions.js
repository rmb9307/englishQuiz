'use strict';

import * as types from './actionTypes';
import {partsOfSpeech} from '../data/quizQuestions';
import axios from 'axios';

export function setQuiz(quiz) {
    return {
        type: types.SET_QUIZ, 
        payload: {
            quiz
        }
    };
}

export const storeResult = (score, outOf) => (dispatch) => {
    axios.post('/api/task')
};
import * as types from './actionTypes';
import {partsOfSpeech} from '../data/quizQuestions';


export function setQuiz(quiz) {
    return {type: types.SET_QUIZ, quiz};
}
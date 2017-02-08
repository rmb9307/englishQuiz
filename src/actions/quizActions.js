import * as types from './actionTypes';
import {partsOfSpeech} from '../api/quizQuestions';
// import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function setQuiz(quiz) {
    return {type: types.SET_QUIZ, quiz};
}
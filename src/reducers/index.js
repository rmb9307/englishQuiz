import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import quiz from './quizReducer';
import completeQuizzes from './completeQuizzesReducer';import user from './userReducer';
import userData from './userDataReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    user,
    quiz,
    userData,
    completeQuizzes
});

export default rootReducer;
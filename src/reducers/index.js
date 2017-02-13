import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import quiz from './quizReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    quiz
});

export default rootReducer;
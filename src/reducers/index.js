import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import quiz from './quizReducer';

const rootReducer = combineReducers({
    courses, 
    authors,
    ajaxCallsInProgress,
    quiz
});

export default rootReducer;
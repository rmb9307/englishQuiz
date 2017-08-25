import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import quiz from './quizReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    user,
    quiz
});

export default rootReducer;
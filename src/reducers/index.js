import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import quiz from './quizReducer';
import user from './userReducer';
import userData from './userDataReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    user,
    quiz,
    userData
});

export default rootReducer;
import axios from 'axios';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function signupReducer(state = initialState.ajaxCallsInProgress, action) {
    if (action.type == types.BEGIN_AJAX_CALL) {
        return state + 1;
    }
    else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    
    return state;
}

// create account
export const createAccount = (email, password, redirectParam) => {
    const url = '/api/users';
    axios.post('/api/users', {email, password})
        .then(user => {
            console.log(email, password);
        });
        //catch errors
};

//---------------------------
// FROM DIAGON ALLEY
// export const signup = (name, email, password) => dispatch => {
//   console.log("signing up")
//   axios.post('/api/users', {name, email, password})
//   .then(user => {
//     console.log("email and pass: ")
//     dispatch(login(user.data.email, user.data.password))
//   })
//   .catch(failed => dispatch(authenticated(null)))
// }
//---------------------------


// export function creatingAccount() {
//   return { type: 'CREATING_ACCOUNT' };
// }

// export function accountCreated(account) {
//   return { type: 'ACCOUNT_CREATED', payload: account };
// }

// export function accountCreatingFailed(error) {
//   return { type: 'ACCOUNT_CREATING_FAILED', payload: error };
// }

// export function createAccount(data, redirectParam) {
//   return (dispatch) => {
//     dispatch(creatingAccount());

//     const url = config.apiUrl + '/auth/signup';

//     fetch(url).post({ body: data })
//       .then(account => {
//         dispatch(accountCreated(account));
//       })
//       .catch(err => {
//         dispatch(accountCreatingFailed(err));
//       });
//   };
// }
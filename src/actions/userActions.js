import * as types from './actionTypes';
import axios from 'axios';

// Action Creators: 
export const signup = (email, password) => ({
    type: types.SIGNUP,
    payload: {
        email,
        password
    }
});

export const login = (email, password) => ({
    type: types.LOGIN,
    payload: {
        email
    }
});

export const logout = () => ({
    type: types.LOGOUT
});


// Dispatchers:
export const createUser = ({email, password}) => (dispatch) => {
    console.log('CREATE USER CALLED');
    console.log('email in createUser: ', email, '\n', 'password in createUser: ', password);
    axios.post('/api/user', { email, password })
    .then(response => {
        console.log('response: ', response);
        response.data;
    })
    .then(user => {
        dispatch(login(user));
    })
    .catch(err => {
        console.log(err);
    });
};
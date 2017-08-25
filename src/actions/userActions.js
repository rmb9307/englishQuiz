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
export const createUser = (email, password) => (dispatch) => {
    console.log('CREATE USER CALLED');
    axios.post('/api/user')
    .then(response => {
        response.data;
    })
    .then(user => {
        dispatch(login(user));
    })
    .catch(err => {
        console.log(err);
    });
};
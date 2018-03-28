'use strict';

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

export const login = (email) => ({
    type: types.LOGIN,
    payload: {
        email
    }
});

export const logout = () => ({
    type: types.LOGOUT
});

export const receiveUser = (userData) => ({
    type: types.RECEIVE_USER,
    payload: {
        userData
    }
});

// Dispatchers:
export const createUser = ({ name, email, password }) => (dispatch) => {
    axios.post('/api/user', { name, email, password })
        .then(response => {
            return response.data;
        })
        .then(userEmail => {
            dispatch(login(userEmail));
        })
        .catch(err => {
            console.log(err);
        });
};

export const getUser = ({ email, password }) => (dispatch) =>  {
    const endpoint = '/api/user/' + email;
    axios.get(endpoint)
        .then(response => {
            return response.data;
        })
        .then(data => {
            // if the user data matches the password, login
            console.log('GET USER DATA:     ', data);
            if(password === data.password) {
                dispatch(login(data.email));
            }
        })
        .catch(err => {
            console.log(err);
        });
};
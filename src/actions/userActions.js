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
            console.log('GET USER DATA:     ', data);
            // TODO: definitely hash the passwords
            if(!data.length) {
                // TODO: have this message display on the actual UI
                console.log('No user found with this email');
            }
            if(password === data.password) {
                dispatch(login(data.email));
            }
        })
        .catch(err => {
            console.log(err);
        });
};
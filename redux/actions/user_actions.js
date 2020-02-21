import { RSAA } from "redux-api-middleware";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';


export const login = (username,password) => ({
    [RSAA]: {
        endpoint: 'http://localhost:3001/auth/login',
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: { 'Content-Type': 'application/json', },
        types: [
            USER_LOGIN_REQUEST,
            USER_LOGIN_SUCCESS,
            USER_LOGIN_FAILURE
        ]
      }
});

export const register = (username,password,email) => ({
    [RSAA]: {
        endpoint: 'http://localhost:3001/users/register',
        method: 'POST',
        body: JSON.stringify({username,password,email}),
        headers: { 'Content-Type': 'application/json', },
        types: [
            USER_REGISTER_REQUEST,
            USER_REGISTER_SUCCESS,
            USER_REGISTER_FAILURE
        ]
      }
});


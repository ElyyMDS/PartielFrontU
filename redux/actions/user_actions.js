import { RSAA } from "redux-api-middleware";

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';


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

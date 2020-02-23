export default function reducer(state = {}, action) {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
        console.log(action.payload)
        return {...state,...action.payload.user,jwt: action.payload.access_token}
      case 'USER_REGISTER_SUCCESS':
        // user exist
        if(action.payload.status === 409){
            console.log(action.payload)
            return state;
        }
        console.log(action.payload)
        return state
      case 'USER_REGISTER_FAILURE':
      case 'USER_LOGIN_FAILURE':
      default:
        console.log('lol');
        return state
    }
  }
export default function todos(state = {}, action) {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
        console.log(action.payload);
        return state
    case 'USER_REGISTER_SUCCESS':
        // user exist
        if(action.payload.status === 409){
            console.log(action.payload)
            return state;
        }
        return state
      case 'USER_REGISTER_FAILURE':
      case 'USER_LOGIN_FAILURE':
      default:
        return state
    }
  }
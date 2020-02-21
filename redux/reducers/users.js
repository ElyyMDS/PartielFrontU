export default function todos(state = {}, action) {
    switch (action.type) {
      case 'USER_LOGIN_SUCCESS':
        console.log(action.payload);
        return state
      case 'USER_LOGIN_FAILURE':
      default:
        return state
    }
  }
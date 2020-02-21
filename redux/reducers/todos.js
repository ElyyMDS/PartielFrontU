export default function todos(state = ['toto'], action) {
    switch (action.type) {
      case 'ADD_TODO':
        console.log('adding')
        let newState = state;
        newState.push(action.text);
        console.log(newState);
        return newState
      default:
        return state
    }
  }
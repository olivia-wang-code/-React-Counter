export default (state = {sum: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { sum: state.sum + action.number }
    case 'DECREMENT':
      // return state.sum - action.number
      return { sum: state.sum - action.number }
    case 'RESET':
      return { sum: 0 }
    default:
      return state
  }
}

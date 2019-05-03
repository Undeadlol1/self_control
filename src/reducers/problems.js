import Store, { emptyProblem } from '../store/problems';

export default function problemsReducer(state = Store, action) {
  console.log('action: ', action.type);
  switch (action.type) {
    case 'ADD_PROBLEM': {
      return {
        ...state,
        problems: state.problems.concat([action.data]),
      };
    }
    default:
      return state;
  }
}

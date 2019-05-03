import uuid from 'uuid/v4';
import Store, { emptyProblem } from '../store/problems';

export default function problemsReducer(state = Store, action) {
  switch (action.type) {
    // Add new problem into "values" array.
    case 'ADD_PROBLEM': {
      const newState = {
        ...state,
        values: [
          ...state.values,
          {
            // Create unique id to avoid problems with:
            // 1) Missing keys in List components.
            // 2) Syncing with database.
            id: uuid(),
            ...action.data,
          },
        ],

      };
      return newState;
    }
    default:
      return state;
  }
}

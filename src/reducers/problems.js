import uuid from 'uuid/v4';
import Store, { emptyProblem } from '../store/problems';

export default function problemsReducer(state = Store, action) {
  switch (action.type) {
    /**
     * Add "id" property and insert problem into "values".
     */
    case 'ADD_PROBLEM': {
      const newState = {
        ...state,
        values: [
          ...state.values,
          { id: uuid(), ...action.data },
        ],

      };
      return newState;
    }
    default:
      return state;
  }
}

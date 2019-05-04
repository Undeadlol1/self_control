import uuid from 'uuid/v4';
import filter from 'lodash/filter';
import Store, { emptyProblem } from '../store/problems';

export default function problemsReducer(state = Store, { type, data }) {
  switch (type) {
    /**
     * Add "id" property and insert problem into "values".
     */
    case 'ADD_PROBLEM': {
      const newState = {
        ...state,
        values: [
          ...state.values,
          { id: uuid(), ...data },
        ],
      };
      return newState;
    }
    /**
     * Edit a problem inside 'values' array.
     * NOTE: Not all object properties must be editable.
     */
    case 'EDIT_PROBLEM': {
      const newState = Object.assign({}, state, {
        values: state.values.map((i) => {
          if (i.id === data.id) return Object.assign(i, data);
          return i;
        }),
      });
      return newState;
    }
    /**
     * Remove problem from 'values' array by id.
     */
    case 'DELETE_PROBLEM': {
      const values = filter(state.values, i => i.id !== data);
      const newState = Object.assign({}, state, { values });
      return newState;
    }
    default:
      return state;
  }
}

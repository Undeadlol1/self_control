import uuid from 'uuid/v4';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';
import concat from 'lodash/concat';
import find from 'lodash/find';

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
      const values = filter(state.values, i => i.id !== data.id);
      const newState = Object.assign({}, state, { values });
      return newState;
    }
    /**
     * Find a solution by id and
     * push an object into "solutions" array.
     */
    case 'ADD_SOLUTION': {
      const values = state
        .values
        .map((problem) => {
          if (problem.id === data.problemId) {
            return {
              ...problem,
              // "Concat" is used because "solutions" might be undefined.
              // Unique id is added to a solution to prevent possible errors.
              solutions: (problem.solutions || []).concat({ id: uuid(), ...data }),
            };
          }
          return problem;
        });
      return Object.assign({}, state, { values });
    }
    /**
     * Find a problem and remove an item from "solutions" array.
     */
    case 'DELETE_SOLUTION': {
      const values = state
        .values
        .map((problem) => {
          if (problem.id === data.problemId) {
            // "Solutions" array might be undefined.
            return {
              ...problem,
              solutions: filter(problem.solution, i => i.id === data.id) || [],
            };
          }
          return problem;
        });
      return Object.assign({}, state, { values });
    }
    default:
      return state;
  }
}

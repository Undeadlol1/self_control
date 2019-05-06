import isUuid from 'uuid-validate';
import generateUuid from 'uuid/v4';
import find from 'lodash/find';
import initialState from '../../store/problems';
import reducer from '../problems';

const populatedState = Object.assign({}, initialState, {
  values: [
    {
      id: 1,
      title: 'This is a name',
    },
    {
      id: 2,
      title: 'This is another name',
    },
  ],
});

describe('problems reducer', async () => {
  /**
   * Make sure app has default state.
   */
  it('should have initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  /**
   * ADD_PROBLEM should:
   * 1) Add id property to passed object.
   * 2) Insert object into "values" array.
   */
  describe('should handle ADD_PROBLEM', () => {
    const data = { title: 'Some', img: '' };
    const action = { type: 'ADD_PROBLEM', data };

    test('initial state', () => {
      const { values } = reducer(undefined, action);
      expect(values).toHaveLength(1);
      expect(values[0]).toHaveProperty('id');
      expect(isUuid(values[0].id)).toBeTruthy();
    });
    // Should work properly if array isn't empty.
    test('populated state', () => {
      const { values } = reducer(populatedState, action);
      expect(values).toHaveLength(3);
      expect(isUuid(values[2].id)).toBeTruthy();
    });
  });
  /**
   * EDIT_PROBLEM should:
   * 1) Edit an object in "values" array.
   * 2) TODO: Not all properties should be editable.
   */
  it('should handle EDIT_PROBLEM', () => {
    const data = { title: 'A new title', id: 1 };
    const action = { type: 'EDIT_PROBLEM', data };
    const { values } = reducer(populatedState, action);
    expect(values).toHaveLength(2);
    expect(values[0]).toHaveProperty('title', data.title);
    expect(values[1].title).toEqual(populatedState.values[1].title);
  });
  /**
   * Use problem.id to push a solution into "solutions" array.
   */
  describe('ADD_SOLUTION', () => {
    const data = { title: 'A new title', problemId: 1 };
    const action = { type: 'ADD_SOLUTION', data };
    // Get problem out of reducer by problemId.
    const { solutions } = find(
      reducer(populatedState, action).values,
      i => i.id === data.problemId,
    );

    it('should push an object into array', () => {
      expect(solutions).toHaveLength(1);
    });

    it('created object should have correct properties.', () => {
      const [newSolution] = solutions;
      expect(isUuid(newSolution.id)).toBeTruthy();
      expect(newSolution).toHaveProperty('title', data.title);
      expect(newSolution).toHaveProperty('problemId', data.problemId);
    });
  });
  /**
   * Remove a problem from 'values' array by problem.id.
   */
  it('should handle DELETE_PROBLEM', () => {
    // Old state is populated.
    expect(populatedState.values).toHaveLength(2);
    const { id } = populatedState.values[0];
    const action = { type: 'DELETE_PROBLEM', data: id };
    // Get new state.
    const { values } = reducer(populatedState, action);
    expect(values).toHaveLength(1);
    // Make sure right one got deleted.
    expect(values[0].id).not.toEqual(id);
  });
});

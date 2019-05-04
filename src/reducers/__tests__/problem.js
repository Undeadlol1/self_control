import isUuid from 'uuid-validate';
import generateUuid from 'uuid/v4';
import initialState from '../../store/problems';
import reducer from '../problems';

describe('problems reducer', async () => {
  it('should have initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  /**
   * ADD_PROBLEM should:
   * 1) Add id property to passed object.
   * 2) Insert object into "values" array.
   */
  it('should handle ADD_PROBLEM on initial state', () => {
    const data = { title: 'Some', img: '' };
    const action = { type: 'ADD_PROBLEM', data };
    const { values } = reducer(undefined, action);
    expect(values).toHaveLength(1);
    expect(values[0]).toHaveProperty('id');
    expect(isUuid(values[0].id)).toBeTruthy();
  });
  /**
   * Remove problem from 'values' array by problem.id.
   */
  // it('should handle DELETE_PROBLEM', () => {
  //   const id = generateUuid();
  //   const action = { type: 'DELETE_PROBLEM', id };
  //   const { values } = reducer(undefined, action);
  //   expect(values).toHaveLength(0);
  //   expect(values[0]).toHaveProperty('id');
  //   expect(isUuid(values[0].id)).toBeTruthy();
  // });

});

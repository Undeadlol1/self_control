/**
 * Empty model structure for a Problem.
 */
export const emptyProblem = {
  id: '',
  name: '',
};
/**
 * Default state of a "problems" reducer.
 */
export default {
  ...emptyProblem,
  // Problems list.
  values: [],
};

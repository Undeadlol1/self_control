/**
 * Empty model structure for a Problem.
 */
export const emptyProblem = {
  id: '',
  title: '',
  image: '',
};
/**
 * Default state of a "problems" reducer.
 */
export default {
  ...emptyProblem,
  // Problems list.
  values: [],
};

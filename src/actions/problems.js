/**
 * Create a problem.
 * @param {Object} data problem object directly from form.
 * @property {string} data.title
 * @property {string} data.image Problem's image URL.
 * @returns {Promise} successful resolve function.
 */
export default function addProblem(data) {
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!data.title) return reject({ message: 'missingTitle' });

    // Call reducer action.
    return resolve(dispatch({ type: 'ADD_PROBLEM', data }));
  }).catch((err) => { throw err.message; });
}
/**
 * Create a solution.
 * @param {Object} data Solution object directly from form.
 * @property {string} data.text
 * @property {string} data.problemId Solution's parent id.
 * @returns {Promise} successful resolve function.
 */
export const addSolution = data => dispatch => new Promise(async (resolve, reject) => {
  // Validation rules
  if (!data.text) return reject({ message: 'missingText' });

  // Call reducer action.
  return resolve(dispatch({ type: 'ADD_SOLUTION', data }));
}).catch((err) => { throw err.message; });
/**
 * Delete a problem.
 * @param {Object} data Solution object directly from form.
 * @property {string} data.id
 * @returns {Promise} successful resolve function.
 */
export function remove(data) {
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!data.id) return reject({ message: 'missingId' });

    // Call reducer action.
    return resolve(dispatch({ type: 'DELETE_PROBLEM', data }));
  }).catch((err) => { throw err.message; });
}
/**
 * Edit a problem.
 * @param {Object} data Problem object.
 * @property {string} data.id
 * @property {string} data.title
 * @property {string} data.image Problem's image URL.
 * @returns {Promise} successful resolve function.
 */
export function edit(data) {
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!data.id) return reject({ message: 'missingId' });

    // Call reducer action.
    return resolve(dispatch({ type: 'EDIT_PROBLEM', data }));
  }).catch((err) => { throw err.message; });
}

import generateUuid from 'uuid/v4';
/**
 * Create a problem.
 * @param {object} data problem object directly from form.
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
 * @param {object} data Solution object directly from form.
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

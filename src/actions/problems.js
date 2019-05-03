/**
 * Create a problem.
 * @param {object} data problem object directly from form.
 * @property {string} data.name
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

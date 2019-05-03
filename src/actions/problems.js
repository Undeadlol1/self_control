import { errorMessages } from '../constants/messages';
/**
 * Create a problem.
 * @param {Object} formData
 */
export default function addProblem(formData) {
  const {
    name,
  } = formData;

  return () => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!name) return reject({ message: errorMessages.missingFirstName });

    // Call reducer action.
    return dispatch => dispatch({ type: 'ADD_PROBLEM', data: formData }).then(() => resolve())
  }).catch((err) => { throw err.message; });
}

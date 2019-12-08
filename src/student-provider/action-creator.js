import { actionTypes } from './student-reducer'

export default function actionCreator(dispatch) {
  return {
    addStudent() {
      return dispatch({ type: actionTypes.ADD_STUDENT })
    },
    addStudentSubject(studentId, subjectId) {
      return dispatch({
        type: actionTypes.ADD_STUDENT_SUBJECT,
        payload: { studentId, subjectId }
      })
    },
    removeStudent(studentId) {
      return dispatch({
        type: actionTypes.DELETE_STUDENT,
        payload: { studentId }
      })
    },
    removeStudentSubject(studentId, subjectId) {
      return dispatch({
        type: actionTypes.DELETE_STUDENT_SUBJECT,
        payload: { studentId, subjectId }
      })
    },
    updateStudent(patch) {
      return dispatch({ type: actionTypes.UPDATE_STUDENT, payload: patch })
    },
    updateStudentSubject(studentId, patch) {
      return dispatch({
        type: actionTypes.UPDATE_STUDENT_SUBJECT,
        payload: { patch, studentId }
      })
    }
  }
}

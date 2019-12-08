import actionCreator from './action-creator'
import { actionTypes } from './student-reducer'

const mockDispatch = jest.fn()
const {
  addStudent,
  addStudentSubject,
  removeStudent,
  removeStudentSubject,
  updateStudent,
  updateStudentSubject
} = actionCreator(mockDispatch)

test('STUDENT::ADD dispatches correctly', () => {
  addStudent()
  expect(mockDispatch).toBeCalledWith({ type: actionTypes.ADD_STUDENT })
})

test('SUBJECT::ADD dispatches correctly', () => {
  const studentId = 1,
    subjectId = 5
  addStudentSubject(studentId, subjectId)
  expect(mockDispatch).toBeCalledWith({
    type: actionTypes.ADD_STUDENT_SUBJECT,
    payload: { studentId, subjectId }
  })
})

test('STUDENT::DEL dispatches correctly', () => {
  const studentId = 10
  removeStudent(studentId)
  expect(mockDispatch).toBeCalledWith({
    type: actionTypes.DELETE_STUDENT,
    payload: { studentId }
  })
})

test('SUBJECT::DEL dispatches correctly', () => {
  const studentId = 1,
    subjectId = 5

  removeStudentSubject(studentId, subjectId)
  expect(mockDispatch).toBeCalledWith({
    type: actionTypes.DELETE_STUDENT_SUBJECT,
    payload: { studentId, subjectId }
  })
})

test('STUDENT::UPDATE dispatches correctly', () => {
  const patch = {
    id: 10,
    name: 'updated name'
  }
  updateStudent(patch)
  expect(mockDispatch).toBeCalledWith({
    type: actionTypes.UPDATE_STUDENT,
    payload: patch
  })
})

test('SUBJECT::UPDATE dispatches correctly', () => {
  const studentId = 15
  const patch = {
    id: 10,
    name: 'updated name'
  }
  updateStudentSubject(studentId, patch)
  expect(mockDispatch).toBeCalledWith({
    type: actionTypes.UPDATE_STUDENT_SUBJECT,
    payload: { patch, studentId }
  })
})

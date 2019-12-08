import {createReducer} from './student-reducer'
import { actionTypes } from './student-reducer'

const mockActions = {
  addStudent: jest.fn(),
  addStudentSubject: jest.fn(),
  updateStudent: jest.fn(),
  updateStudentSubject: jest.fn(),
  removeStudent: jest.fn(),
  removeStudentSubject: jest.fn()
}

const studentReducer = createReducer(mockActions)

test('studentReducer calls addStudent correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.ADD_STUDENT })
  expect(mockActions.addStudent).toBeCalledWith(students)
})

test('studentReducer calls addStudentSubject correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.ADD_STUDENT_SUBJECT, payload: { studentId: 10 } })
  expect(mockActions.addStudentSubject).toBeCalledWith(10,students)
})

test('studentReducer calls removeStudent correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.DELETE_STUDENT, payload: { studentId: 10 } })
  expect(mockActions.removeStudent).toBeCalledWith(10, students)
})

test('studentReducer calls removeStudentSubject correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.DELETE_STUDENT_SUBJECT, payload: { studentId: 10, subjectId:15 } })
  expect(mockActions.removeStudentSubject).toBeCalledWith(10,15, students)
})

test('studentReducer calls updateStudent correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.UPDATE_STUDENT, payload: { id: 10, name: '' } })
  expect(mockActions.updateStudent).toBeCalled()
})

test('studentReducer calls updateStudentSubject correctly', () => {
  const students = []
  studentReducer(students, { type: actionTypes.UPDATE_STUDENT_SUBJECT, payload: { studentId: 10, patch: {} } })
  expect(mockActions.updateStudentSubject).toBeCalled()
})

test('invalid event type throws', () => {
  expect(() => studentReducer([], { type: 'NOOP'})).toThrow('Invalid action type NOOP')
})

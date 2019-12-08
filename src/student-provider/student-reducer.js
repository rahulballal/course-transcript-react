import * as R from 'ramda'
import uuid from 'uuid/v4'

export const actionTypes = {
  ADD_STUDENT: 'STUDENT::ADD',
  DELETE_STUDENT: 'STUDENT::DEL',
  UPDATE_STUDENT: 'STUDENT::UPDATE',
  ADD_STUDENT_SUBJECT: 'SUBJECT::ADD',
  DELETE_STUDENT_SUBJECT: 'SUBJECT::DEL',
  UPDATE_STUDENT_SUBJECT: 'SUBJECT::UPDATE'
}

export function makeStudent () {
  const newStudent = {
    name: '',
    dob: '',
    id: uuid(),
    subjects: []
  }

  return {...newStudent}
}

export function makeSubject() {
  const newSubject = { name: '', grade: '', id: `${new Date().valueOf()}` }
  return {...newSubject}
}

export const addStudent = ( students = []) => {
  return [...students, makeStudent()]
}

export const removeStudent = (id, students) => {
  return students.filter(elem => elem.id !== id)
}

export const updateStudent = (patch, students) => {
  const copy = [...students]
  const idx = copy.findIndex(elem => elem.id === patch.id)
  copy[idx] = { ...copy[idx], ...patch }

  return copy
}

export const addStudentSubject = (studentId, students) => {
  const copy = R.clone(students)
  const idx = R.findIndex(elem => elem.id === studentId, students)
  copy[idx].subjects = [...copy[idx].subjects, makeSubject()]
  return copy
}

export const removeStudentSubject = (studentId, subjectId, students) => {
  const copy = R.clone(students)
  const studentIdx = copy.findIndex(elem => elem.id === studentId)
  const subjectIdx = copy[studentIdx].subjects.findIndex(
    elem => elem.id === subjectId
  )
  copy[studentIdx].subjects = R.remove(subjectIdx, 1, copy[studentIdx].subjects)

  return copy
}

export const updateStudentSubject = (studentId, patch, students) => {
  const copy = R.clone(students)
  const studentIdx = copy.findIndex(elem => elem.id === studentId)
  const subjectIdx = copy[studentIdx].subjects.findIndex(
    elem => elem.id === patch.id
  )

  copy[studentIdx].subjects[subjectIdx] = {
    ...copy[studentIdx].subjects[subjectIdx],
    ...patch
  }

  return copy
}

export function createReducer({addStudent, removeStudent, updateStudent, addStudentSubject, removeStudentSubject, updateStudentSubject}) {
  function studentReducer(students, evt = {}) {
    const { type, payload } = evt
    switch (type) {
      case actionTypes.ADD_STUDENT: {
        return addStudent(students)
      }
      case actionTypes.DELETE_STUDENT: {
        return removeStudent(payload.studentId, students)
      }
      case actionTypes.UPDATE_STUDENT: {
        return updateStudent(payload, students)
      }
      case actionTypes.ADD_STUDENT_SUBJECT: {
        return addStudentSubject(payload.studentId, students)
      }
      case actionTypes.DELETE_STUDENT_SUBJECT: {
        return removeStudentSubject(
          payload.studentId,
          payload.subjectId,
          students
        )
      }
      case actionTypes.UPDATE_STUDENT_SUBJECT: {
        return updateStudentSubject(payload.studentId, payload.patch, students)
      }
      default:
        throw new Error('Invalid action type ' + type)
    }
  }
  return studentReducer
}

export default createReducer({
  addStudent,
  addStudentSubject,
  updateStudent,
  updateStudentSubject,
  removeStudent,
  removeStudentSubject
})

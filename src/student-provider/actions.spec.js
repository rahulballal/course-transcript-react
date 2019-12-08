import {
  addStudent,
  addStudentSubject,
  makeStudent,
  makeSubject,
  removeStudent,
  removeStudentSubject, updateStudent, updateStudentSubject
} from './student-reducer'

test('add student adds single student', () => {
  const students = []
  const newList = addStudent(students)

  expect(newList.length).toBe(1)
  expect(Object.keys(newList[0])).toEqual(['name', 'dob', 'id', 'subjects'])
  expect(newList[0].subjects.length).toBe(0)
})

test('add subject add single subject to student', () => {
  const student1 = makeStudent()
  const students = [student1]
  const actual = addStudentSubject(student1.id, students)

  expect(actual[0].subjects.length).toBe(1)
})

test('remove student removes a single student', () => {
  const s1 = makeStudent()
  const s2 = makeStudent()
  const students = [s1, s2]

  const actual = removeStudent(s1.id, students)
  expect(actual[0].id).toBe(s2.id)
})

test('remove subject removes a single subject', () => {
  const s1 = makeStudent()
  const maths = makeSubject()

  s1.subjects.push(maths)
  const s2 = makeStudent()
  const students = [s1, s2]

  const actual = removeStudentSubject(s1.id, maths.id, students)
  expect(actual[0].subjects.length).toBe(0)
})

test('update student updates respective field', () => {
  const student1 = makeStudent()
  const subjects = {
    maths: makeSubject(),
    science: makeSubject()
  }
  student1.name = 'Student 1'
  student1.subjects = [subjects.maths, subjects.science]

  const students = [student1]

  const actual = updateStudent({id: student1.id, name: 'UPDATED'}, students)

  expect(actual[0].name).toBe('UPDATED')
  expect(actual[0].dob).toBe('')
  expect(actual[0].subjects.length).toBe(2)
})

test('update subject updates respective field', () => {
  const student1 = makeStudent()
  const subjects = {
    maths: makeSubject(),
    science: makeSubject()
  }
  student1.name = 'Student 1'
  student1.subjects = [subjects.maths, subjects.science]

  const students = [student1]

  const actual = updateStudentSubject(student1.id, { id: subjects.maths.id, grade: 'A'}, students)
  expect(actual[0].subjects[0].grade).toBe('A')
})

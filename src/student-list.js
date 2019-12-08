import React, { useContext } from 'react'
import * as R from 'ramda'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Student from './student'
import { ActionContext, DataContext } from './student-provider'
import Subject from './subject'
import EmptyList from './empty-list'
import Divider from '@material-ui/core/Divider';


/**
 * @return {null}
 */
function SubjectList({ studentId, subjects }) {
  const { addStudentSubject } = useContext(ActionContext)

  if (R.isEmpty(subjects)) {
    return <EmptyList onAdd={() => addStudentSubject(studentId)} buttonLabel="ADD SUBJECT"/>
  }

  return (
    <div>
      <List style={{ backgroundColor: '#f8f8f8', marginTop: '8px'}} subheader={<strong>Subjects</strong>}>
        {R.map(
          ({ name, id, grade }) => (
            <ListItem key={id}>
              <Subject
                name={name}
                grade={grade}
                id={id}
                studentId={studentId}
              />
            </ListItem>
          ),
          subjects
        )}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addStudentSubject(studentId)}
      >
        ADD SUBJECT
      </Button>
    </div>
  )
}

/**
 * @return {null}
 */
function StudentList() {
  const students = useContext(DataContext)
  const { addStudent } = useContext(ActionContext)

  if (R.isEmpty(students)) {
    return <EmptyList onAdd={() => addStudent()} buttonLabel="ADD STUDENT"/>
  }

  return (
    <div>
      <List subheader={<strong>STUDENTS</strong>}>
        {R.map(
          ({ name, id, dob, subjects }) => (
            <ListItem key={id} style={{ backgroundColor: 'paleGreen', marginBottom: '10px'}}>
              <Student name={name} id={id} dob={dob}>
                <SubjectList subjects={subjects} studentId={id}/>
              </Student>
              <Divider/>
            </ListItem>
          ),
          students
        )}
      </List>
      <Button variant="contained" color="primary" onClick={addStudent}>
        ADD STUDENT
      </Button>
    </div>
  )
}

export default StudentList

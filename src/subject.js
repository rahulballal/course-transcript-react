import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { ActionContext } from './student-provider'

function Subject({ name, studentId, id, grade }) {
  const { removeStudentSubject, updateStudentSubject } = useContext(
    ActionContext
  )

  const handleNameChange = ({ target: {value} }) =>
    updateStudentSubject(studentId, { id, name: value })
  const handleGradeChange = ({ target: {value} }) =>
    updateStudentSubject(studentId, { id, grade: value })
  const handleDelete = () => removeStudentSubject(studentId, id)

  return (
    <Box>
      <TextField label="Name" onChange={handleNameChange} value={name} style={{ paddingRight: '15px'}} />
      <TextField onChange={handleGradeChange} label="Grade" value={grade} />
      <Button onClick={handleDelete} variant="outlined" color="primary">
        DEL
      </Button>
    </Box>
  )
}

export default Subject

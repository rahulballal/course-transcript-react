import Chip from '@material-ui/core/Chip'
import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { ActionContext } from './student-provider'

function Student({ name, id, dob, children }) {
  const { removeStudent, updateStudent } = useContext(ActionContext)

  const handleNameChange = ({ target: {value} }) =>
    updateStudent({ id, name: value })
  const handleDOBChange = ({ target: {value} }) =>
    updateStudent({ id, dob: value })
  const handleDelete = () => removeStudent(id)

  return (
    <Box>
      <div>
        <Chip key={`chip_${id}`} color="default" label={`ID: ${id}`}/>
      </div>
      <TextField
        onChange={handleNameChange}
        value={name}
        label="Student Name"
        style={{ paddingRight: '15px'}}
      />
      <TextField
        onChange={handleDOBChange}
        label="DOB"
        value={dob}
      />
      <Button onClick={handleDelete} variant="outlined" color="primary">
        DEL
      </Button>
      {children}
    </Box>
  )
}

export default Student

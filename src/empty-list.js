import Button from '@material-ui/core/Button'
import React from 'react'

export default function EmptyList({ onAdd, buttonLabel }) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onAdd}>
        {buttonLabel}
      </Button>
    </div>
  )
}

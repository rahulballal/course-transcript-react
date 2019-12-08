import React from 'react'

import studentReducer from './student-reducer'
import actionCreator from './action-creator'

export const DataContext = React.createContext()
export const ActionContext = React.createContext()

function StudentProvider(props) {
  const [state, dispatch] = React.useReducer(studentReducer, props.initialState)
  const actions = actionCreator(dispatch)

  return (
    <DataContext.Provider value={state}>
      <ActionContext.Provider value={actions}>
        {props.children}
      </ActionContext.Provider>
    </DataContext.Provider>
  )
}

export default StudentProvider

StudentProvider.defaultProps = {
  initialState: [
    {
      name: 'Rahul Ballal',
      dob: '17-12-1982',
      id: 'abc17',
      subjects: [{ name: 'Algorithms', grade: 'B', id: 'abc17-algo' }]
    }
  ]
}

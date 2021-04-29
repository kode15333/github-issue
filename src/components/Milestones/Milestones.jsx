import React, { useEffect, useReducer } from 'react'
import { MilesStoneWrap, } from './Milestones.style'
import { getMilestones, initialState, reducer } from './reducer'
import MilestoneCreateForm from './MilestoneCreateForm/MilestoneCreateForm'
import MilestoneTable from './MilestoneTable/MilestoneTable'

export const MilestonesContext = React.createContext();

const Milestones = ({isShowForm = false, toggleForm}) => {
  const [state, dispatch] = useReducer(reducer, {...initialState, isShowForm});

  useEffect(() => {
    (async () => {
      await getMilestones(dispatch)
    })()
  }, [])

  return (
    <MilestonesContext.Provider value={{state, dispatch, toggleForm}}>
      <MilesStoneWrap>
        <MilestoneCreateForm isShowForm={isShowForm}/>
        <MilestoneTable isShowForm={isShowForm}/>
      </MilesStoneWrap>
    </MilestonesContext.Provider>
  )
}

export default Milestones

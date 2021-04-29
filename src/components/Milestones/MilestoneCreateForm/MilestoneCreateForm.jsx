import React, { useContext } from 'react'
import { CreateFormWrap } from './MilestoneCreateForm.style'
import MilestoneForm from '../MilestoneForm/MilestoneForm'
import { MilestonesContext } from '../Milestones'
import { postMilestone } from '../reducer'

const MileStoneCreateForm = ({isShowForm}) => {
  const { dispatch } = useContext(MilestonesContext)
  return (
    <CreateFormWrap isShowForm={isShowForm}>
      <MilestoneForm onCreate={postMilestone(dispatch)}/>
    </CreateFormWrap>
  )
}

export default MileStoneCreateForm

import React from 'react'
import { MileStone, MilestoneAction, MileStoneInfo } from './MilestoneRow.style'

const MilestoneRow = ({
  id,
  title,
  date,
  desc,
  status,
  openUpdateForm,
  onUpdate,
  onDelete
}) => {

  const handleClickEdit = () => {
    openUpdateForm(id)
  }

  const handleCLClickClose = () => {
    onUpdate({ id, title, date, desc, status: 'close' })
  }

  const handleClickDelete = () => {
    onDelete(id)
  }
  const dateContent = date.length ? date : 'No due date'
  return (
    <MileStone>
      <MileStoneInfo>
        <h4>{title}</h4>
        <span>{dateContent}</span>
        <span>{desc}</span>
      </MileStoneInfo>
      <MileStoneInfo>
        <span>진행률</span>
        <div>
          <span>100% Complete</span>
          <span>0 open</span>
          <span>0 closed</span>
        </div>
        <MilestoneAction>
          <button onClick={handleClickEdit}>Edit</button>
          <button onClick={handleCLClickClose}>Close</button>
          <button onClick={handleClickDelete}>Delete</button>
        </MilestoneAction>
      </MileStoneInfo>
    </MileStone>
  )
}

export default MilestoneRow

import React from 'react'
import { MileStone, MileStoneInfo } from './MilestoneRow.style'

const MilestoneRow = ({id, title, date, desc}) => {
  const dateContent = date.length ? date : 'No due date';
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
        <div>
          <button>Edit</button>
          <button>Close</button>
          <button>Delete</button>
        </div>
      </MileStoneInfo>
    </MileStone>
  )
}

export default MilestoneRow

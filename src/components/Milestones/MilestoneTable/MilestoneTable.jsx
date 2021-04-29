import React, { useContext } from 'react'
import { TableBody } from './MilestoneTable.style'
import MilestoneRow from './Body/MilestoneRow'
import TableHeader from './Header/TableHeader'
import { MilestonesContext } from '../Milestones'

const MilestoneTable = () => {
  const {state : {milestoneData}} = useContext(MilestonesContext);
  const MilesStonesRows = () => milestoneData.map(({id, title, date, desc}) => <MilestoneRow key={id} {...{id, title, date, desc}}/>)

  return (
    <>
      <TableHeader/>
      <TableBody>
        <MilesStonesRows/>
      </TableBody>
    </>
  )
}

export default MilestoneTable

import React, { useContext } from 'react'
import { MilestonesContext } from '../../Milestones'
import { Header } from './TableHeader.style'

const getCounts = (acc, {status}) => {
  if (status === 'open') {
    acc['opened'] += 1;
  } else {
    acc['closed'] += 1;
  }
  return acc;
}

const TableHeader = () => {
  const {state : {milestoneData}} = useContext(MilestonesContext);
  const {opened, closed} = milestoneData.reduce(getCounts, {opened: 0, closed : 0});
  return (
    <Header>
      <div>{opened} Open</div>
      <div>{closed} Closed</div>
    </Header>
  )
}

export default TableHeader

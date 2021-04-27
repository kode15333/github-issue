import React from 'react'
import { NavWrap } from './IssueTable.style'
import { BTN_LABEL, NAV_TITLE } from '@utils/constant'

const IssueTableNav = ({openCreateForm, onClick}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <NavWrap>
      <div>
        <button onClick={handleClick}>{NAV_TITLE.LABELS}</button>
        <button onClick={handleClick}>{NAV_TITLE.MILESTONES}</button>
      </div>
      <button onClick={openCreateForm}>{BTN_LABEL.NEW}</button>
    </NavWrap>
  );
};

export default IssueTableNav;

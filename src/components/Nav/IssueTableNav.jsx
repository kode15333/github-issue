import React from 'react'
import { NavWrap } from './IssueTable.style'
import { BTN_LABEL, NAV_TITLE } from '../../utils/constant'

const IssueTableNav = ({onClick}) => {
  return (
    <NavWrap>
      <div>
        <button>{NAV_TITLE.LABELS}</button>
        <button>{NAV_TITLE.MILESTONES}</button>
      </div>
      <button onClick={onClick}>{BTN_LABEL.NEW}</button>
    </NavWrap>
  );
};

export default IssueTableNav;

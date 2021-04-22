import React from 'react';
import {NavWrap} from "./IssueTable.style";

const IssueTableNav = ({onClick}) => {
  return (
    <NavWrap>
      <div>
        <button>Labels</button>
        <button>Milestones</button>
      </div>
      <button onClick={onClick}>New Label</button>
    </NavWrap>
  );
};

export default IssueTableNav;

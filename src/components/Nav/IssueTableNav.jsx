import React from 'react';
import {NavWrap} from "./IssueTable.style";

const IssueTableNav = () => {
  return (
    <NavWrap>
      <div>
        <button>Labels</button>
        <button>Miles</button>
      </div>
      <button>New Label</button>
    </NavWrap>
  );
};

export default IssueTableNav;

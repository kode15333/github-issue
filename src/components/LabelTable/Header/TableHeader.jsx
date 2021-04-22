import React from 'react';
import {BoxHeader} from "./TableHeader.style";

const TableHeader = ({totalCount = 0}) => {
  return (
    <BoxHeader>
      <span>{totalCount} labels</span>
    </BoxHeader>
  );
};

export default TableHeader;

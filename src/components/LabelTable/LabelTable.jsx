import React from 'react';
import {BoxBody, BoxWrap, FormAction, InputField, RowUpdateWrap} from "./LabelTable.style";
import LabelRow from "./Body/LabelRow";
import TableHeader from "./Header/TableHeader";


const EditLabel = ({id = '', labelName = '', desc = '', color = 'd73a4a'}) => {
  return (
    <RowUpdateWrap>
      <InputField className="w-7">
        Label Name : <input type="text" name="name"/>
        Description : <input type="text" name="desc"/>
        Color : <button name="random">R</button>
        <input type="text" defaultValue="#d73a4a" name="color"/>
      </InputField>
      <FormAction className="w-3">
        <button>Cancel</button>
        <button type="submit">Save Change</button>
      </FormAction>
    </RowUpdateWrap>
  )
}


const LabelTable = ({labels}) => {
  const totalCount = labels.length;
  const LabelsRows = () => labels.map((label) => <LabelRow label={label} key={label.id}/>)
  return (
    <BoxWrap>
      <TableHeader totalCount={totalCount}/>
      <BoxBody>
        <LabelsRows/>
      </BoxBody>
    </BoxWrap>
  );
};

export default LabelTable;

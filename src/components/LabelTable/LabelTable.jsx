import {BoxBody, BoxWrap} from "./LabelTable.style";
import LabelRow from "./Body/LabelRow";
import TableHeader from "./Header/TableHeader";


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

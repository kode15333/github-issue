import { BoxRow, LabelName, RowInfo } from './LabelRow.style'
import { BTN_LABEL } from '../../../utils/constant'

const LabelRow = ({label: {labelName='', desc ='', color = '#e99695'}}) => {
  return (
    <BoxRow>
      <RowInfo>
        <div className="label-info">
          <div className="w-3">
            <LabelName color={color}>{labelName}</LabelName>
          </div>
          <div className="w-7">
            <span>{desc}</span>
          </div>
        </div>
        <div className="btn-list w-2">
          <button>{BTN_LABEL.EDIT}</button>
          <button>{BTN_LABEL.DELETE}</button>
        </div>
      </RowInfo>
    </BoxRow>
  );
};

export default LabelRow;

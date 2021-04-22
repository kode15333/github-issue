import {
  BoxRow,
  LabelName,
  LabelUpdateFormWrap,
  RowInfo
} from './LabelRow.style'
import { BTN_LABEL } from '../../../utils/constant'
import LabelForm from '../../LabelForm/LabelForm'
import { useState } from 'react'

const LabelRow = ({label, updateData}) => {
  const {id, labelName='', desc ='', color = '#e99695'} = label;
  const [isShowUpdateForm, setIsShowUpdateForm] = useState(false);
  const handleCloseBtn = () => {
    setIsShowUpdateForm(() => !isShowUpdateForm)
  }
  return (
    <BoxRow>
      <RowInfo isHideInfo={isShowUpdateForm}>
        <div className="label-info">
          <div className="w-3">
            <LabelName color={color}>{labelName}</LabelName>
          </div>
          <div className="w-7">
            <span>{desc}</span>
          </div>
        </div>
        <div className="btn-list w-2">
          <button onClick={handleCloseBtn}>{BTN_LABEL.EDIT}</button>
          <button>{BTN_LABEL.DELETE}</button>
        </div>
      </RowInfo>
      <LabelUpdateFormWrap isShowForm={isShowUpdateForm}>
        <LabelForm id={id} labelName={labelName} desc={desc} color={color} onClose={handleCloseBtn} updateData={updateData}/>
      </LabelUpdateFormWrap>
    </BoxRow>
  );
};

export default LabelRow;

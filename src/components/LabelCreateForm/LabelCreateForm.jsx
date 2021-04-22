import { LabelCreateFormWrap, } from './LabelCreateForm.style'
import LabelForm from '../LabelForm/LabelForm'

const LabelCreateForm = ({isShowForm = false, showForm }) => {
  if (isShowForm === false) {
    return null;
  }

  return (
    <LabelCreateFormWrap>
      <LabelForm onClose={showForm}/>
    </LabelCreateFormWrap>
  )
}

export default LabelCreateForm

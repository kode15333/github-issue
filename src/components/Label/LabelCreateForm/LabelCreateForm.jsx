import {LabelCreateFormWrap,} from './LabelCreateForm.style'
import LabelForm from '../LabelForm/LabelForm'

const LabelCreateForm = ({isShowForm = false, toggleForm }) => {

  return (
    <LabelCreateFormWrap  isShowForm={isShowForm}>
      <LabelForm onClose={toggleForm}/>
    </LabelCreateFormWrap>
  )
}

export default LabelCreateForm

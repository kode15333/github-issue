import {
  Field,
  FormAction,
  InputField,
  LabelUpdateFormWrap, RanDomBtn
} from './LabelCreateForm.style'
import { LabelName } from '../LabelTable/Body/LabelRow.style'
import { useState } from 'react'

const LabelCreateForm = ({id = '', labelName = '', desc = '', color = '#d73a4a', isShowForm = false, showForm } ) => {
  const [labelData, setLabelData] = useState({
    id,
    labelName,
    desc,
    color
  })

  const handleClickMakeColor = (e) => {
    e.preventDefault();
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    setLabelData(() => ({ ...labelData, color }))
  }

  const handleChangeLabelData = ({ target : {name, value}}) => {
    setLabelData(() => ({ ...labelData, [name]: value }))
  }

  const postLabel = (data) => {
    return fetch("http://localhost:3001/issues", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await postLabel(labelData)
      if (response.ok) {
        showForm();
      }
    }catch (err) {
      console.error(err)
    }

  }

  const handleCloseBtn = (e) => {
    e.preventDefault();
    showForm();
  }

  return (
    <LabelUpdateFormWrap onSubmit={handleSubmit} isShowForm={isShowForm}>
      <div className="labelNameWrap">
        <LabelName color={labelData.color}
                   className="labelName">{labelData.labelName ? labelData.labelName : 'Label preview'}</LabelName>
      </div>
      <InputField>
        <Field>
          <label htmlFor="labelName">Label Name</label>
          <input id="labelName"
                 type="text"
                 name="labelName"
                 value={labelData.labelName}
                 onChange={handleChangeLabelData}/>
        </Field>
        <Field>
          <label htmlFor="desc">Description</label>
          <input id="desc"
                 type="text"
                 name="desc"
                 value={labelData.desc}
                 onChange={handleChangeLabelData}/>
        </Field>
        <Field>
          <label htmlFor="color">Color</label>
          <div>
            <RanDomBtn name="random" onClick={handleClickMakeColor} color={labelData.color}>R</RanDomBtn>
            <input id="color"
                   type="text"
                   name="color"
                   value={labelData.color}
                   onChange={handleChangeLabelData}/>
          </div>
        </Field>
      </InputField>
      <FormAction name={labelData.labelName}>
        <button className="close" onClick={ handleCloseBtn}>Cancel</button>
        <button type="submit">Save Change</button>
      </FormAction>
    </LabelUpdateFormWrap>
  )
}

export default LabelCreateForm

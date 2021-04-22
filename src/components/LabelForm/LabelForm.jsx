import React, { useState } from 'react'
import {
  Field,
  FormAction,
  InputField,
  LabelFormWrap,
  LabelNameWrap,
  RanDomBtn
} from './LabelForm.style'
import { LabelName } from '../LabelTable/Body/LabelRow.style'
import { makeRandomColor } from '../../utils/util'
import { postLabel } from '../../utils/api'
import { BTN_LABEL, FORM_LABEL } from '../../utils/constant'

const LabelForm = ({onClose}) => {
  const [labelData, setLabelData] = useState({
    labelName: '',
    desc: '',
    color: '#35946F'
  })

  const handleClickMakeColor = (e) => {
    e.preventDefault()
    const color = makeRandomColor()
    setLabelData(() => ({ ...labelData, color }))
  }


  const handleChangeLabelData = ({ target: { name, value } }) => {
    setLabelData(() => ({ ...labelData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await postLabel(labelData)
      if (response.ok) {
        setLabelData(() => ({
          labelName: '',
          desc: '',
          color: '#35946F'
        }))
        onClose()
      }
    } catch (err) {
      console.error(err)
    }
  }


  const handleCloseModal = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <>
      <LabelNameWrap>
        <LabelName color={labelData.color}
                   className="labelName">{labelData.labelName ? labelData.labelName : 'Label preview'}</LabelName>
      </LabelNameWrap>
      <LabelFormWrap onSubmit={handleSubmit}>
        <InputField>
          <Field>
            <label htmlFor="labelName">{FORM_LABEL.NAME}</label>
            <input id="labelName"
                   type="text"
                   name="labelName"
                   value={labelData.labelName}
                   onChange={handleChangeLabelData}/>
          </Field>
          <Field>
            <label htmlFor="desc">{FORM_LABEL.DESC}</label>
            <input id="desc"
                   type="text"
                   name="desc"
                   value={labelData.desc}
                   onChange={handleChangeLabelData}/>
          </Field>
          <Field>
            <label htmlFor="color">{FORM_LABEL.Color}</label>
            <div>
              <RanDomBtn name="random" onClick={handleClickMakeColor}
                         color={labelData.color}>{BTN_LABEL.RANDOM}</RanDomBtn>
              <input id="color"
                     type="text"
                     name="color"
                     value={labelData.color}
                     onChange={handleChangeLabelData}/>
            </div>
          </Field>
        </InputField>
        <FormAction name={labelData.labelName}>
          <button className="close" onClick={handleCloseModal}>{BTN_LABEL.CANCEL}</button>
          <button type="submit" disabled={labelData.labelName.length < 0}>{BTN_LABEL.SAVE}</button>
        </FormAction>
      </LabelFormWrap>
    </>
  )
}

export default LabelForm

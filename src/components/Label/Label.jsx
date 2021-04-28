import React from 'react'
import LabelCreateForm from './LabelCreateForm/LabelCreateForm'
import LabelTable from './LabelTable/LabelTable'

const Label = ({ isShowForm, toggleForm, labels, updateData }) => {

  return (
    <>
      <LabelCreateForm {...{ isShowForm, toggleForm }}/>
      <LabelTable {...{ labels, updateData }}/>
    </>
  )
}

export default Label

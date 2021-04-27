import React from 'react'
import LabelCreateForm from './LabelCreateForm/LabelCreateForm'
import LabelTable from './LabelTable/LabelTable'

const Label = ({ isShowForm, showForm, labels, updateData }) => {

  return (
    <>
      <LabelCreateForm {...{ isShowForm, showForm }}/>
      <LabelTable {...{ labels, updateData }}/>
    </>
  )
}

export default Label

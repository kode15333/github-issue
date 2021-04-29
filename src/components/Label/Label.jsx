import React from 'react'
import LabelCreateForm from './LabelCreateForm/LabelCreateForm'
import LabelTable from './LabelTable/LabelTable'
import useLabelsStatus from '../Contents/useLabelsStatus'

const Label = ({ isShowForm, toggleForm  }) => {
  const [labels, getLabelsData] = useLabelsStatus()

  return (
    <>
      <LabelCreateForm {...{ isShowForm, toggleForm, updateData: getLabelsData}}/>
      <LabelTable {...{ labels, updateData: getLabelsData }}/>
    </>
  )
}

export default Label

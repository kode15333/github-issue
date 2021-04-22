import { useEffect, useState } from 'react'
import LabelTable from './components/LabelTable/LabelTable'
import IssueTableNav from './components/Nav/IssueTableNav'
import LabelCreateForm from './components/LabelCreateForm/LabelCreateForm'
import { getLabels } from './utils/api'
import { LABEL } from './utils/constant'
import { compareObject } from './utils/util'
import { HeaderWrap, MainWrap } from './App.style'

function App () {
  const [labels, setLabels] = useState([])
  const [isShowForm, setIsShowForm] = useState(false)

  const getLabelsData = async () => {
    try {
      const labelsData = await getLabels();
      if (compareObject(labelsData, labels)) return
      setLabels( () =>[...labelsData])
    } catch (err) {
      console.error(err)
    }
  }

  const onClickNewLabelBtn = async () => {
    await getLabelsData()
    setIsShowForm(() => !isShowForm)
  }

  useEffect( () => {
   getLabelsData()
  }, [])

  return (
    <div>
      <HeaderWrap>{LABEL.TITLE}</HeaderWrap>
      <MainWrap>
        <IssueTableNav openCreateForm={onClickNewLabelBtn}/>
        <LabelCreateForm isShowForm={isShowForm} showForm={onClickNewLabelBtn}/>
        <LabelTable labels={labels} updateData={getLabelsData}/>
      </MainWrap>
    </div>
  )
}

export default App


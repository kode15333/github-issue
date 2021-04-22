import styled from 'styled-components'
import { useEffect, useState } from 'react'
import LabelTable from './components/LabelTable/LabelTable'
import IssueTableNav from './components/Nav/IssueTableNav'
import LabelCreateForm from './components/LabelCreateForm/LabelCreateForm'
import { getLabels } from './utils/api'
import { LABEL } from './utils/constant'

function App () {
  const [labels, setLabels] = useState([])
  const [isShowForm, setIsShowForm] = useState(false)

  const getLabelsData = async () => {
    try {
      const labelsData = await getLabels();
      // if (compareObject(labelsData, labels)) return
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
    <div className="App">
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

const HeaderWrap = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 60px;
  color: #ffffff;
  background-color: rgb(55, 62, 67);
`

const MainWrap = styled.main`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
`

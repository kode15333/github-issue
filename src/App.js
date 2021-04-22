import styled from 'styled-components'
import {useEffect, useState} from "react";
import LabelTable from "./components/LabelTable/LabelTable";
import IssueTableNav from "./components/Nav/IssueTableNav";
import LabelCreateForm from './components/LabelCreateForm/LabelCreateForm'
import { BoxWrap } from './components/LabelTable/LabelTable.style'

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


function App () {
  const [labels, setLabels] = useState([])

  const getLabelsData = async () => {
    try {
      const response = await fetch("http://localhost:3001/issues");
      const labelsData = await response.json()
      if (JSON.stringify(labelsData) === JSON.stringify(labels)) return
      setLabels( () =>[...labelsData])
    } catch (err) {
      console.error(err)
    }
  }

  const [isShowForm, setIsShowForm] = useState(false)
  const onClickNewLabelBtn = async () => {
    setIsShowForm(() => !isShowForm)
    await getLabelsData()
  }

  useEffect( () => {
   getLabelsData()
  }, [])

  return (
    <div className="App">
      <HeaderWrap>ISSUES</HeaderWrap>
      <MainWrap>
        <IssueTableNav onClick={onClickNewLabelBtn}/>
        <LabelCreateForm isShowForm={isShowForm} showForm={onClickNewLabelBtn}/>
        <LabelTable labels={labels}/>
      </MainWrap>
    </div>
  )
}

export default App

import React, {useState} from 'react';
import {MainWrap} from "../../App.style";
import Milestones from "../Milestones/Milestones";
import Label from "../Label/Label";
import Nav from "../Nav/Nav";
import useLabelsStatus from "./useLabelsStatus";


const Content = () => {
  const [navTitle, setNavTitle] = useState('label')
  const [labels, getLabelsData] = useLabelsStatus()
  const [isShowForm, setIsShowForm] = useState(false)


  const onClickNav = (title) => {
    setNavTitle(() => title)
  }
  const onToggleNewContent = async () => {
    await getLabelsData()
    setIsShowForm(() => !isShowForm)
  }

  const Content = {
    'label' :  (<Label isShowForm={isShowForm} toggleForm={onToggleNewContent}
                      labels={labels} updateData={getLabelsData}/>),
    'milestone' : (<Milestones/>)
  }

  return (
    <MainWrap>
      <Nav openCreateForm={onToggleNewContent} onClick={onClickNav} navTitle={navTitle}/>
      {Content[navTitle]}
    </MainWrap>
  );
};

export default Content;

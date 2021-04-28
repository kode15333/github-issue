import React from 'react'
import {NavBtn, NavWrap} from './Nav.style'
import {BTN_LABEL, NAV_TITLE} from '@utils/constant'


const newBtnLabel = {
  'label': BTN_LABEL.NEW_LABEL,
  'milestone': BTN_LABEL.NEW_MILESTONE
}

const Nav = ({openCreateForm, onClick, navTitle}) => {
  const handleClick = ({target: {name}}) => {
    onClick(name)
  }
  return (
    <NavWrap>
      <div>
        <NavBtn onClick={handleClick} name='label' navTitle={navTitle}>{NAV_TITLE.LABELS}</NavBtn>
        <NavBtn onClick={handleClick} name='milestone' navTitle={navTitle}>{NAV_TITLE.MILESTONES}</NavBtn>
      </div>
      <button onClick={openCreateForm}>{newBtnLabel[navTitle]}</button>
    </NavWrap>
  );
};

export default Nav;

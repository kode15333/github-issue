import React, { useReducer } from 'react'
import {
  Header,
  MilesStoneWrap,
  MileStone,
  MileStoneInfo
} from './Milestones.style'
import { initialState, reducer } from './reducer'
import MilestoneCreateForm from './MilestoneCreateForm/MilestoneCreateForm'
import {
  ContentWrap,
  CreateFormWrap
} from './MilestoneCreateForm/MilestoneCreateForm.style'

export const MilestonesContext = React.createContext();

const Milestones = ({isShowForm = false, toggleForm}) => {
  const [state, dispatch] = useReducer(reducer, {...initialState, isShowForm});

  return (
    <MilestonesContext.Provider value={{state, dispatch, toggleForm}}>
      <MilesStoneWrap>
        <CreateFormWrap isShowForm={isShowForm}>
          <MilestoneCreateForm />
        </CreateFormWrap>
        <ContentWrap  isShowForm={isShowForm}>
        <div>
          <Header>
            <div>1 Open</div>
            <div>0 Closed</div>
          </Header>
          <ul>
            <MileStone>
              <MileStoneInfo>
                <h4>스프린트2</h4>
                <span>no due or date</span>
                <span>description</span>
              </MileStoneInfo>
              <MileStoneInfo>
                <span>진행률</span>
                <div>
                  <span>100% Complete</span>
                  <span>0 open</span>
                  <span>0 closed</span>
                </div>
                <div>
                  <button>Edit</button>
                  <button>Close</button>
                  <button>Delete</button>
                </div>
              </MileStoneInfo>
            </MileStone>
          </ul>
        </div>
        </ContentWrap>
      </MilesStoneWrap>
    </MilestonesContext.Provider>
  )
}

export default Milestones

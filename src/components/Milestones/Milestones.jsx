import React, {useReducer} from 'react'
import CreateForm from './CreateForm/CreateForm'
import {Header, MilesStoneWrap, MileStone, MileStoneInfo} from "./Milestones.style";
import {initialState, reducer} from "./reducer";


export const MilestonesContext = React.createContext();
const Milestones = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <MilestonesContext.Provider value={{state, dispatch}}>
      <MilesStoneWrap>
        <CreateForm/>
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
      </MilesStoneWrap>
    </MilestonesContext.Provider>
  )
}

export default Milestones

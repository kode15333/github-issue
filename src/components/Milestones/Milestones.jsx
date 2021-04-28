import React from 'react'
import CreateForm from './CreateForm/CreateForm'
import styled from 'styled-components'

const MilesStoneWrap = styled.div`
  width: 100%;
  font-size: 14px;
  
  ul {
    margin: 0;
    padding: 0;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #f6f8fa;
  height: 49px;
  border: 1px solid rgb(225, 228, 232);
  div {
    margin: 0 5px;
  }
`

const MileStone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 15px;
  border: 1px solid rgb(225, 228, 232);


`
const MileStoneInfo = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h4 {
    margin: 0;
    font-size: 16px;
  }
  span {
    margin: 2px;
  }
`
const Milestones = () => {
  return (
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
  )
}

export default Milestones

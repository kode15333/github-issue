import styled from 'styled-components'

export const MilesStoneWrap = styled.div`
  width: 100%;
  font-size: 14px;
  
  ul {
    margin: 0;
    padding: 0;
  }
`

export const MileStone = styled.li`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  box-sizing: border-box;
  border: 1px solid rgb(225, 228, 232);


`
export const MileStoneInfo = styled.div`
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

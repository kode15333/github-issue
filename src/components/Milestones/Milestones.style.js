import styled from "styled-components";

export const MilesStoneWrap = styled.div`
  width: 100%;
  font-size: 14px;
  
  ul {
    margin: 0;
    padding: 0;
  }
`

export const Header = styled.div`
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

export const MileStone = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 15px;
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

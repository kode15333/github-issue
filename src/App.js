import styled from 'styled-components'
const AppStyle = styled.div`
  button {
    background: none;
    text-decoration: none;
    border: none;
  }
  
  .w-2 {
    width: 20%;
  }
  
  .w-3 {
    width: 30%;
  }
  
  .w-7 {
    width: 70%;
  }
  
  .w-8 {
    width: 80%;
  }
  
  
`
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

const SubNavWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BoxWrap = styled.div`
  width: 100%;
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  margin-top: 20px;
`
const BoxHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: rgb(246, 248, 250)
`

const BoxBody = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  margin: 0;
`

const BoxRow = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(225, 228, 232);
  padding: 16px;

`

const RowInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .label-info {
    width: 100%;
    display: flex;
      button {
        height: 24px;
        line-height: 24px;
        background-color: red;
        padding: 0 10px;
        border-radius: 30px;
        border-color: inherit;
      }
    
      span {
        width: 70%;
      }

  }
  
  .btn-list {
    display: flex;
    justify-content: flex-end;
  }
`

const RowUpdateWrap = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 40px;
  }
`

const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input{
    width: 100px;
    padding: 0 10px;
    margin-right: 20px;
  }
`

const FormAction = styled.div`
  display: flex;
  justify-content: flex-end;
`

function App () {
  return (
    <AppStyle className="App">
      <HeaderWrap>ISSUES</HeaderWrap>
      <MainWrap>
        <SubNavWrap>
          <div>
            <button>Labels</button>
            <button>Miles</button>
          </div>
          <button>New Label</button>
        </SubNavWrap>
        <BoxWrap>
          <BoxHeader>
            <span>9 labels</span>
          </BoxHeader>
          <BoxBody>
            <BoxRow>
              <RowInfo>
                <div className="label-info">
                  <div className="w-3">
                    <button>Bug</button>
                  </div>
                  <div className="w-7">
                    <span>Something isn't working</span>
                  </div>
                </div>
                <div className="btn-list w-2">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </RowInfo>
              <RowUpdateWrap>
                <InputField className="w-7">
                  Label Name : <input type="text" name="name"/>
                  Description : <input type="text" name="desc"/>
                  Color : <button name="random">R</button>
                  <input type="text" defaultValue="#d73a4a" name="color"/>
                </InputField>
                <FormAction className="w-3">
                  <button>Cancel</button>
                  <button type="submit">Save Change</button>
                </FormAction>
              </RowUpdateWrap>
            </BoxRow>
          </BoxBody>
        </BoxWrap>
      </MainWrap>
    </AppStyle>
  )
}

export default App

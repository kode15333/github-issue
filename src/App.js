import styled from 'styled-components'

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
`

const RowUpdateWrap = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 40px;
  }
`

function App () {
  return (
    <div className="App">
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
                <div>
                  <button>Bug</button>
                  <span>Something isn't working</span>
                </div>
                <div>
                  <button>Edit</button>
                  <button>DELETE</button>
                </div>
              </RowInfo>
              <RowUpdateWrap>
                <div>
                  <input/>
                  <input/>
                  <input/>
                  <input/>
                </div>
                <div>
                  <button>Cancel</button>
                  <button>Save Change</button>
                </div>
              </RowUpdateWrap>
            </BoxRow>
            <BoxRow>
              <RowInfo>
                <div>
                  <button>Bug</button>
                  <span>Something isn't working</span>
                </div>
                <div>
                  <button>Edit</button>
                  <button>DELETE</button>
                </div>
              </RowInfo>
              <RowUpdateWrap>
                <div>
                  <input/>
                  <input/>
                  <input/>
                  <input/>
                </div>
                <div>
                  <button>Cancel</button>
                  <button>Save Change</button>
                </div>
              </RowUpdateWrap>
            </BoxRow>

            <BoxRow>
              <RowInfo>
                <div>
                  <button>Bug</button>
                  <span>Something isn't working</span>
                </div>
                <div>
                  <button>Edit</button>
                  <button>DELETE</button>
                </div>
              </RowInfo>
              <RowUpdateWrap>
                <div>
                  <input/>
                  <input/>
                  <input/>
                  <input/>
                </div>
                <div>
                  <button>Cancel</button>
                  <button>Save Change</button>
                </div>
              </RowUpdateWrap>
            </BoxRow>
          </BoxBody>
        </BoxWrap>
      </MainWrap>
    </div>
  )
}

export default App

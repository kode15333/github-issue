import styled from "styled-components";

export const BoxWrap = styled.div`
  width: 100%;
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
  margin-top: 20px;
`

export const BoxBody = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
  margin: 0;
`

export const RowUpdateWrap = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    width: 40px;
  }
`

export const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100px;
    padding: 0 10px;
    margin-right: 20px;
  }
`

export const FormAction = styled.div`
  display: flex;
  justify-content: flex-end;
`


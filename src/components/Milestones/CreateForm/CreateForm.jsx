import React from 'react'
import {Field, FormAction} from '../../Label/LabelForm/LabelForm.style'
import styled from 'styled-components'

const CreateFormHeader = styled.div`
  height: 74px;
  border-bottom: 1px solid rgb(225, 228, 232);

  h1 {
    margin-bottom: 8px;
  }
`

const CreateFormWrap = styled.div`
  margin: 15px 0;
`

const FormLabel = styled(Field)`
  margin-bottom: 15px;


  input {
    width: 440px;
    height: 32px;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
    padding: 1px 5px;
    background-color: rgb(250, 251, 252);
    outline: none;
  }

  textarea {
    width: 80%;
    border: 1px solid rgb(225, 228, 232);
    border-radius: 6px;
    padding: 1px 5px;
    background-color: rgb(250, 251, 252);
  }
`

const FormBtn = styled(FormAction)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgb(225, 228, 232);


  button {
    &[type="submit"] {
      opacity: ${props => props.title ? 1 : 0.5};
    }
  }
`
const CreateForm = () => {
  return (
    <>
      <CreateFormHeader>
        <h3>New milestone</h3>
        <span>Create a new milestone to help organize your issues and pull requests. Learn more about milestones and issues.</span>
      </CreateFormHeader>
      <CreateFormWrap>
        <FormLabel>
          <label htmlFor="title">Title</label>
          <input id="title" name="title"/>
        </FormLabel>
        <FormLabel>
          <label htmlFor="date">Due date(optional)</label>
          <input type="date" pattern="\d\d\d\d-\d\d-\d\d"
                 placeholder="yyyy-mm-dd"
                 id="date" name="date"/>
        </FormLabel>
        <FormLabel>
          <label htmlFor="desc">Description</label>
          <textarea id="title" name="title" cols="20" rows="13" maxLength="8192"/>
        </FormLabel>
        <FormBtn>
          <button name="cancel">Cancel</button>
          <button name="close">Close milestone</button>
          <button type="submit">Create milestone</button>
        </FormBtn>
      </CreateFormWrap>
    </>
  )
}

export default CreateForm

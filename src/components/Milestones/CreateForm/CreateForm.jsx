import React, {useState} from 'react'
import {CreateFormHeader, CreateFormWrap, FormBtn, FormLabel} from "./CreateForm.style";
import {MilestonesAPI} from "../../../utils/api";


const CreateForm = () => {
  const [milestoneData, setMilestoneData] = useState({
    title: '',
    date: '',
    desc: '',
    status: 'open'
  })

  const handleChangeMilestoneData = ({target: {name, value}}) => {
    setMilestoneData(() => ({...milestoneData, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await MilestonesAPI.postMilestone(milestoneData)
      if (response.ok) {
        setMilestoneData(() => ({
          title: '',
          date: '',
          desc: '',
          status: 'open'
        }))
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <CreateFormHeader>
        <h3>New milestone</h3>
        <span>Create a new milestone to help organize your issues and pull requests. Learn more about milestones and issues.</span>
      </CreateFormHeader>
      <CreateFormWrap onSubmit={handleSubmit}>
        <FormLabel>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={milestoneData.title}
            onChange={handleChangeMilestoneData}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor="date">Due date(optional)</label>
          <input
            type="date"
            id="date"
            name="date"
            pattern="\d\d\d\d-\d\d-\d\d"
            placeholder="yyyy-mm-dd"
            value={milestoneData.data}
            onChange={handleChangeMilestoneData}
          />
        </FormLabel>
        <FormLabel>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            name="desc"
            cols="20"
            rows="13"
            maxLength="8192"
            value={milestoneData.desc}
            onChange={handleChangeMilestoneData}
          />
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

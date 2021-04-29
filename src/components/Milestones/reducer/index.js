import { MilestonesAPI } from '../../../utils/api'

const ADD_MILESTONE = 'milestone/ADD_MILESTONE';
const UPDATE_MILESTONE = 'milestone/UPDATE_MILESTONE';
const DELETE_MILESTONE = 'milestone/DELETE_MILESTONE'

export const addMilestone = milestoneData => ({type: ADD_MILESTONE, payload: milestoneData});
export const updateMilestone = milestoneData => ({type: UPDATE_MILESTONE, payload: milestoneData});
export const removeMilestone = id => ({type: DELETE_MILESTONE, payload: {id}})

export const getMilestones = async (dispatch) => {
  const response = MilestonesAPI.getMilestones();
  const milestoneData = await response;
  dispatch(addMilestone(milestoneData))
}
export const deleteMilestone = (dispatch) => async (id) => {
  try {
    const response = await MilestonesAPI.deleteMilestone({id});
    if (response.ok === false) {
      throw response.status
    }
    dispatch(removeMilestone(id))
  } catch (err) {
    console.error('addMilesStone Error', err)
  }
}

export const putMilestone = (dispatch) => async (milestoneData) => {
  try {
    const response = await MilestonesAPI.putMilestone(milestoneData);
    if (response.ok === false) {
      throw response.status
    }
    const milestone = await response.json();
    dispatch(updateMilestone(milestone))
  } catch (err) {
    console.error('addMilesStone Error', err)
  }
}

export const postMilestone = (dispatch) => async (milestoneData) => {
  try {
    const response = await MilestonesAPI.postMilestone(milestoneData);
    if (response.ok === false) {
      throw response.status
    }
    const milestone = await response.json();
    dispatch(addMilestone([milestone]))
  } catch (err) {
    console.error('addMilesStone Error', err)
  }
}
export const initialState = {
  milestoneData: [],
  editMode: false
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_MILESTONE:
      return {...state, milestoneData: [...(state.milestoneData), ...payload], editMode: !state.editMode};
    case UPDATE_MILESTONE:
      const newData = state.milestoneData.map(milestone => {
        if (milestone.id === payload.id) {
          return payload
        }
        return milestone
      })
      return {...state, milestoneData: newData, editMode: !state.editMode}
    case DELETE_MILESTONE:
      console.log(payload)
      state.milestoneData = state.milestoneData.filter(({id}) => id !== payload.id);
      console.log('state', state)
      return {...state, editMode: !state.editMode};
    default :
      console.log('invalid action')
  }
}



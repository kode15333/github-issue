const ADD_MILESTONE = 'milestone/ADD_MILESTONE';
const UPDATE_MILESTONE = 'milestone/UPDATE_MILESTONE';
const DELETE_MILESTONE = 'milestone/DELETE_MILESTONE'

export const addMilestone = milestoneData => ({type: ADD_MILESTONE, payload: milestoneData});
export const updateMilestone = milestoneData => ({type: UPDATE_MILESTONE, payload: milestoneData});
export const deleteMilestone = id => ({type: DELETE_MILESTONE, payload: {id}})

export const initialState = {
  milestoneData: [],
  editMode: false,
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_MILESTONE:
      return {...state, milestoneData: [...(state.milestoneData), payload], editMode: !state.editMode};
    case UPDATE_MILESTONE:
      state.milestoneData = state.milestoneData.map(milestone => {
        if (milestone.id === payload.id) {
          return {...milestone, ...payload}
        }
        return milestone
      })
      return {...state, editMode: !state.editMode}
    case DELETE_MILESTONE:
      console.log(payload)
      state.milestoneData = state.milestoneData.filter(({id}) => id !== payload.id);
      console.log('state', state)
      return {...state, editMode: !state.editMode};
    default :
      console.log('invalid action')
  }
}



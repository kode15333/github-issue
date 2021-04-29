export const initialState = {
  milestoneData: [
    {
      "id": 1,
      "title": "title입니다",
      "dsec": "내용입니다",
      "status": "open"
    }
  ],
  editMode: false,
}

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case 'addMilestone':
      break;
    case 'updateMilestone':
      break;
    default :
      console.log('invalid action')
  }
}



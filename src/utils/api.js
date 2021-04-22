import { SERVER_URL } from './constant'

export const getLabels = async () => {
  try {
    const response = await fetch(SERVER_URL)
    return response.json()
  } catch (err) {
    console.error('getLabels Error', err)
  }


}
export const postLabel = ({ labelName, desc, color }) => {
  return postData(SERVER_URL, {
    labelName,
    desc,
    color
  })
}

function postData (url = '', data = {}) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

import {useEffect, useState} from 'react';
import {getLabels} from "../../utils/api";
import {compareObject} from "../../utils/util";

const useLabelsStatus = () => {
  const [labels, setLabels] = useState([])

  const getLabelsData = async () => {
    try {
      const labelsData = await getLabels()
      if (compareObject(labelsData, labels)) return
      setLabels(() => [...labelsData])
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getLabelsData()
  }, [])

  return [labels, getLabelsData];
}

export default useLabelsStatus

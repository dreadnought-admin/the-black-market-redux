import { useState, useContext } from 'react'
import { RecordsContext } from '../global/RecordsProvider';
import { Link } from 'react-router-dom'

const RecordList = () => {

  const { records, setRecords } = useContext(RecordsContext);

  console.log(records);


  return (
    <div>This is the RecordList</div>
  )
}

export default RecordList
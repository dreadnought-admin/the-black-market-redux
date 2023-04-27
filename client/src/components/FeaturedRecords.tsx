import { useState, useContext, useEffect } from 'react'
import { RecordsContext } from '../global/RecordsProvider';
import RecordList from './RecordList';

const FeaturedRecords = () => {

  const { records, setRecords } = useContext(RecordsContext);

  useEffect(() => {
    fetch("http://localhost:3000/randomized_records")
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((records) => {
          setRecords(records)
        })
      }
    })
  }, [])

  if (!records) return <h1>Loading, sorry</h1>


  return (
    <div>FeaturedRecords</div>
  )
}

export default FeaturedRecords
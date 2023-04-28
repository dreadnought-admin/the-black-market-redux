import { useState, useEffect } from 'react'
import RecordCard from './RecordCard'

const FeaturedRecords = () => {

  const [records, setRecords] = useState([]);

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
    <div>
      {records ? records.map((record: any) => (
          <RecordCard
          key={record.id}
          record={record}
          records={records}
          setRecords={setRecords}
          />
        )) : null}
        {records && records.length ? null : <p>no data available</p>}
    </div>
  )
}

export default FeaturedRecords
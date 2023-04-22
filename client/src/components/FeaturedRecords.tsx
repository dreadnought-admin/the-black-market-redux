import { useState, useContext } from 'react'
import { RecordsContext } from '../global/RecordsProvider';

const FeaturedRecords = () => {

  const { records, setRecords } = useContext(RecordsContext);

  console.log(records);


  return (
    <div>FeaturedRecords</div>
  )
}

export default FeaturedRecords
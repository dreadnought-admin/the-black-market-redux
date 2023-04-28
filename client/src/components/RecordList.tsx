import { useState, useContext, useMemo } from 'react'
import { RecordsContext } from '../global/RecordsProvider';
import { Link } from 'react-router-dom'
import { subDays, subMonths, isWithinInterval } from "date-fns";
import RecordCard from './RecordCard';

const RecordList = () => {

  // const [search, setSearch] = useState("");

  const [selectedSort, setSelectedSort] = useState("descending");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const { records, setRecords } = useContext(RecordsContext);


  if (!records) return <h1>Sorry baby, loading</h1>;

  console.log(records);

  return (
    <div>
      <section>
        {records ? records.map((record) => (
          <RecordCard
          key={record.id}
          record={record}
          records={records}
          setRecords={setRecords}
          />
        )) : null}
        {records && records.length ? null : <p>no data available</p>}
      </section>
    </div>
  )
}

export default RecordList
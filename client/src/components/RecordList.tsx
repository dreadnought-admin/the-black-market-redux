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
      <h2>Reocrd List</h2>

      <div className="sort-filter-select">
        <select
          name="filter"
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="all">all</option>
          <option value="day">last day</option>
          <option value="week">last week</option>
          <option value="month">last month</option>
        </select>

        <select
          className="sort-select"
          name="sort"
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          <option value="descending">descending</option>
          <option value="ascending">ascending</option>
        </select>
      </div>

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
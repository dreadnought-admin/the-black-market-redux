import { Link, useNavigate } from 'react-router-dom';
import { SetStateAction, Dispatch, useState, useContext } from 'react';
import { Record as RecordType} from '../types';
import { RecordsContext } from '../global/RecordsProvider';


  interface RecordProps {
    record: RecordType;
    records: RecordType[];
    setRecords: Dispatch<SetStateAction<RecordType[]>>;
  }

  const RecordCard: React.FC<RecordProps> = ({ record, records, setRecords }) => {

    let navigate = useNavigate();

    function handleRecordDelete(id: number) {
      const updatedRecords = records.filter((ogRecord) => ogRecord.id !== id);
      setRecords(updatedRecords);
    }


  return (
    <div>
        <span>
        <Link to={`http://localhost:5173/records/${record!.id}`}>
          {record.album_cover ? (
            <img height="75x" width="75px" src={record.album_cover}></img>
          ) : <p>Loading...</p>
          }

          <br/>

          {record.album_name ? (
            <span>
              {record.album_name}
            </span>
            ) : null
          }
        </Link>
        </span>
    </div>
  )
}

export default RecordCard
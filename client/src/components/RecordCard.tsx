import { Link  } from 'react-router-dom';
import { SetStateAction, Dispatch, useState, useContext } from 'react';
import { Record as RecordType} from '../types';
import { RecordsContext } from '../global/RecordsProvider';


  interface RecordProps {
    record: RecordType;
    records: RecordType[];
    setRecords: Dispatch<SetStateAction<RecordType[]>>;
  }

  const RecordCard: React.FC<RecordProps> = ({ record, records, setRecords }) => {

    const [filler, setFiller] = useState(false);

    function handleRecordDelete(id: number) {
      const updatedRecords = records.filter((ogRecord) => ogRecord.id !== id);
      setRecords(updatedRecords);
    }

  return (
    <div>
        {record.album_name ? (
        <span>
          {record.album_name}
        </span>
        ): null}
    </div>
  )
}

export default RecordCard
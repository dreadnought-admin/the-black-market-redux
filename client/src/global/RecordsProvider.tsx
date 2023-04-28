import { 
  createContext, 
  useState, 
  useEffect, 
  useContext, 
  Dispatch, 
  SetStateAction 
} from "react";
import { UserContext } from "./UserProvider";
import { Record } from "../types";

interface RecordContextValue {
  records: Record[];
  setRecords: Dispatch<SetStateAction<Record[]>>;
  recordsLoaded: boolean;
}

const RecordsContext = createContext<RecordContextValue>({
  records: [],
  setRecords: () => {},
  recordsLoaded: false,
});

interface RecordsProviderProps {
  children: React.ReactNode;
}

const RecordsProvider: React.FC<RecordsProviderProps> = ({ children }) => {
  const { user } = useContext(UserContext);

  const [records, setRecords] = useState<Record[]>([]);

  const [recordsLoaded, setRecordsLoaded] = useState(false);

  const fetchRecords = () => {
    fetch(`http://localhost:3000/records`)
    .then((r) => r.json())
    .then((recordsFromServer) => {
      setRecords(recordsFromServer);
      setRecordsLoaded(true);
    })
  }

  useEffect(() => {
    fetchRecords();
  }, [user]);

  return (
    <RecordsContext.Provider value={{ records, setRecords, recordsLoaded }}>
      {children}
    </RecordsContext.Provider>
  );
};

export { RecordsContext, RecordsProvider };
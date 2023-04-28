import { useState, useEffect, useContext } from "react";
import { UserContext } from "../global/UserProvider";
import { RecordsContext } from "../global/RecordsProvider";
import { useParams, Link, useNavigate } from "react-router-dom";
import RecordList from "./RecordList";

const UserProfile = () => {

  const [errors, setErrors] = useState([]);
  const [userRecords, setUserRecords] = useState([]);

  const { user, setUser, userLoaded } = useContext(UserContext);
  const { records, setRecords } = useContext(RecordsContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: user?.username,
    email: user?.email,
    password_digest: "",
    instagram_handle: user?.instagram_handle,
    bio: user?.bio,
    avatar: user?.avatar
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [e.target.name]: e.target.value,
      };
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/user_records/${user!.id}`)
    .then((r) => r.json())
    .then((userRecords) => setUserRecords(userRecords));
    }, []);

  useEffect(() => {
    fetch("http://localhost:3000/randomized_records")
    .then((r) => { 
      if (r.ok) {
        r.json().then((records) => {
          setRecords(records)
        });
      }
    });
  }, []);

  return (
    <div>{user.username}</div>
  )
}

export default UserProfile
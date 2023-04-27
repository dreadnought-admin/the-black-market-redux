import { useState, useContext } from "react";
import { UserContext } from "../global/UserProvider";
import { useNavigate } from "react-router-dom";




const UserProfile = () => {

  const [errors, setErrors] = useState([]);

  const { user, userLoaded } = useContext(UserContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: user?.username,
    email: user?.email,
    password_digest: "",
  });

  console.log(user.username);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [e.target.name]: e.target.value,
      };
    });
  }








  return (
    <div>{user.username}</div>
  )
}

export default UserProfile
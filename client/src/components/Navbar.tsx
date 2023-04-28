import { useContext, useEffect, useState  } from 'react';
import { UserContext } from '../global/UserProvider';
import { useNavigate, NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3000/authorized_user`)
      .then((r) => r.json())
      .then((user) => {
        updateUser(user);
      });
  }, []);

  const updateUser = (currentuser: any) => setUser(currentuser);

  console.log(user)

  // const [credentials, setCredentials] = useState({
  //   username: user?.username,
  //   email: user?.email,
  //   password_digest: "",
  // });

  const navigate = useNavigate();

  async function handleLogout(e: React.MouseEvent) {
    e.preventDefault();
    const r = await fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
    });
    if (r.ok) {
      updateUser(false);
      navigate("/");
    }
  }


  return (
    <div>
      <span>
        {/* <img src="#" alt="logo"></img> */}
      </span>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/records">Browse Records</NavLink>
      {!user?
       <NavLink to="/signup">Create an Account</NavLink> : null}

      {!user?
      <NavLink to="/login">Login</NavLink> : null}

      {user && (
        <NavLink to="/new_sale">Sell a Record</NavLink>
      )}

      {user && (
        <NavLink to="/cart">Your Cart</NavLink>
      )}

      {user? (
        <NavLink to="/profile">Welcome Back, {user.username}</NavLink>
      ): null}

      {user && (
        <NavLink onClick={handleLogout} to="/">Logout</NavLink>
      )}

    </div>
  )
}

export default Navbar
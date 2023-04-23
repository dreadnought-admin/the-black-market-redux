import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../global/UserProvider";

const Login = () => {
  const [errors, setErrors] = useState([]);

  let { user, setUser, setUserLoaded } = useContext(UserContext);

  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => {
      return {
        ...prevCredentials,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const r = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(credentials),
    });
    if (r.ok) {
      const currentUser = await r.json();
      setUser(currentUser);
      setUserLoaded(true);
      navigate("/profile");
    } else {
      const err = await r.json();
      setErrors(err.errors);
      console.log(credentials)
    }
  }

  if (user) {
    navigate("/profile");
  }

  return (
    <main className="login-container fade-in-fwd">
      <h2>
        login to <span className="logo-small">introspect.</span>
      </h2>
      <form className="login-form card" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={credentials.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="username"
          value={credentials.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>

      <div>
        <Link to="/signup">sign up</Link>
      </div>

      {errors.length ? (
        <div>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      ) : null}
    </main>
  );
};

export default Login;

import { useContext, useState } from "react";
import { UserContext } from "../global/UserProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [errors, setErrors] = useState([]);

  let { setUser } = useContext(UserContext);

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

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

    const r = await fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (r.ok) {
      const currentUser = await r.json();
      setUser(currentUser);
      navigate("/");
    } else {
      const err = await r.json();
      setErrors(err.errors);
    }
  }

  return (
    <main className="signup-container fade-in-fwd">
      <h2>
        sign up for <span className="logo-small">The Black Market.</span>
      </h2>
      <form className="signup-form card" onSubmit={handleSubmit}>
        
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

        <button type="submit">sign up</button>
      </form>

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

export default SignUp;

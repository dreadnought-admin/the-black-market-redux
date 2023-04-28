import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Black Vinyl Market</h1>
      <h3>Browse, Sell, and Discover New Dark Music</h3>
      <div>
        <a target="_blank" href="https://www.youtube.com/watch?v=w9DPEkguMqE&ab_channel=kamerarosak">
          <button>🧛🏻</button>
        </a>

        <a target="_blank" href="https://www.youtube.com/watch?v=fcF8DaOSasY&ab_channel=SpinningTheVinyl101">
          <button>🕷</button>
        </a>
        
        <a target="_blank" href="https://www.youtube.com/watch?v=TjvvK-Rj0WI&ab_channel=SiouxsieBansheesVEVO">
          <button>🦇</button>
        </a>

        <h2>New Here?</h2><Link to="/signup">Sign Up</Link>

        
        <h2>Returning User?</h2>
        <Link to="/login">Login</Link>

      </div>
    </div>
  )
}

export default Home
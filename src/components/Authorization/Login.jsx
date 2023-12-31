import { useState } from 'react';
import BASE_URL from "../../API/index.js";
//import {authToken} from '../../API/authToken.js';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => { 
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login, e.g., set user session or redirect to a protected page
        console.log('Login successful:', data);
      } else {
        // Handle login failure, e.g., display an error message
        console.error('Login failed:', data);
      }
      console.log(data);
      
      console.log(data.data.token);
      
      //authToken = (data.data.token);
    } 
   
    catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
    <div >Login</div>
    <div id="homeTab">
    <div className="home">
      <input type="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className='loginTab'>Login</button>
    </div>
    </div>
    </>
  );
}

export default Login;

import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom

function Logout() {
  const history = useHistory(); // Access the history object
  
  const handleLogout = () => {
    // Implement your logout logic here (e.g., clearing tokens, etc.)
    // For example, you can clear local storage:
    localStorage.removeItem('authToken');
    
    // Redirect the user to the login page
    history.push('/login'); // Replace 'login' with your actual login route
  };

  return (
    <>
      <div id="homeTab">SecureLog-Out</div>
      <div className="home">        
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Logout;

// Function to set the token on state and optionally in sessionStorage
export const logIn = (token) => {
    // Set the token on state
    // store the token in sessionStorage
    window.sessionStorage.setItem('token', token);
  };
  
  // Function to clear the token from state and sessionStorage
  export const logOut = () => {
    // Clear the token from state
    // remove the token from sessionStorage
    window.sessionStorage.removeItem('token');
  };
  
  // Function to check if a user is logged in based on the presence of the token on state
  export const isLoggedIn = () => {
    // Check if the token is present on state
    // Return true if logged in, false otherwise
    return !!window.sessionStorage.getItem('token');
  };
  
  // Function to create headers object with or without the bearer token depending on the presence of the token on state
  export const makeHeaders = () => {
    // Create headers object
    const headers = {
      'Content-Type': 'application/json',
    };
  
    // If the user is logged in, add the bearer token to the headers
    if (isLoggedIn()) {
      headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    }
    // Return the headers object
    return headers;
  };
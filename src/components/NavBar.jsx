import { Link } from 'react-router-dom';
const NavBar=() =>{
  return (
      // navigation panel header    
      <div id='navbar'>     
      <div><h2>Stranger Things</h2></div> 
      <Link to="/Home" id='naviTab'>Home</Link>
      <Link to="/postList" id='naviTab'>Posts</Link>
      <Link to="/messages" id='naviTab'>Messages</Link>
      <Link to="/login" id='naviTab'>Sign In</Link>         
      <Link to="/register" id='naviTab'>Register</Link>         
      </div>
  
  );
}

export default NavBar;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-links">
        <Link to="/Home" className="footer-link">Home</Link>
        <Link to="/Post" className="footer-link">Post</Link>
        <Link to="/Register" className="footer-link">Register</Link>
        <Link to="/Logout" className="footer-link">Log-Out</Link>
      </div>
      <div className="footer-text">
        <p>coded by Group two © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;

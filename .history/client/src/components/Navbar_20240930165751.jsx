import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

export const NavbarBootstrap = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">Home</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
    );
}
//fix LOGOUT

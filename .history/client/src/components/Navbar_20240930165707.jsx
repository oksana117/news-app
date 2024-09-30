import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarBootstrap = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark"> 
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/search">Search News</Nav.Link>
                        <Nav.Link href="/login">Logout</Nav.Link> 
                        <Nav.Link href="/login">Logout</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
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

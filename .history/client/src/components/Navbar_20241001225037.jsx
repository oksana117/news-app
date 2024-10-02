/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export const NavbarBootstrap = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <div>
            {isAuthenticated && (
        <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark"> 
            
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                       
                                <Nav.Link href="/home">Home</Nav.Link>
                                <Nav.Link href="/search">Search News</Nav.Link>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link> 
                          
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
                </Navbar>
                 )}
        
        </div>
    );
};

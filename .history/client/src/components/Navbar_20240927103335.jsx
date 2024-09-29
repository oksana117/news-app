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
                        <Nav.Link href="/login">Logout</Nav.Link> <!-- -->
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


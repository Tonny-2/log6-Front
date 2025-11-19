import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Navbar1() {
    const expand = 'l';

    return (
        <Navbar bg="primary" data-bs-theme="dark" expand={expand} className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand><br/>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="#">About</Nav.Link>
                <Nav.Link as={Link} to="#">Help</Nav.Link>
            </Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item><br/>
                            <NavDropdown.Item as={Link} to="/signup">Signup</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
}
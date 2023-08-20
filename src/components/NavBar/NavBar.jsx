import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import{NavLink} from "react-router-dom";

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to='/'>RADIOHEADS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to='/category/Clasicos'>Clasicos</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/Ofertas'>Ofertas</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to='/category/Nueva era'>Nueva era</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to='/'>Todos los productos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <NavLink style={{textDecoration:'none'}} to='/cart'> <CartWidget/></NavLink> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

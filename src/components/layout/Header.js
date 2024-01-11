import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda de Frutas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="lista-frutas">Lista de Frutas</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={user.nombre} id="collapsible-nav-dropdown">
              <NavDropdown.Item href="">...</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={logout}>
                Salir
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar key={"md"} expand={"md"} className="bg-body-tertiary mb-3">
    //   <Container fluid>
    //     <Navbar.Brand href="/">Tienda de Frutas</Navbar.Brand>
    //     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
    //     <Navbar.Offcanvas
    //       id={`offcanvasNavbar-expand-${"md"}`}
    //       aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"md"}`}>
    //           Tienda de Frutas
    //         </Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3">
    //           <Nav.Link href="lista-frutas">Listado de frutas</Nav.Link>
    //           <NavDropdown
    //             title={user.nombre}
    //             id={`offcanvasNavbarDropdown-expand-${"md"}`}
    //           >
    //             <NavDropdown.Item href="">...</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item
    //               href="/"
    //               onClick={logout}
    //             >
    //               Salir
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>
  );
};

export default Header;

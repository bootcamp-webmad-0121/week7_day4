import { Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'

import { NavLink, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Coasters Fever</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" exact>
                        <Nav.Link as="span">Inicio</Nav.Link>
                    </NavLink>
                    <NavLink to="/listado-montañas">
                        <Nav.Link as="span">Listado</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation
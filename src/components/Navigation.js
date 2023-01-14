import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Cart, Search, QuestionCircle } from 'react-bootstrap-icons'

function Navigation() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Tech Tower
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <NavDropdown title="Gaming Systems">
                            <NavDropdown.Item href="/python">Python</NavDropdown.Item>
                            <NavDropdown.Item href="/executive">Executive</NavDropdown.Item>
                            <NavDropdown.Item href="/mycin">Mycin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/gaming-systems">View All</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/custom-builds">Custom Builds</Nav.Link>
                        <Nav.Link href="/trade-ins">Trade-Ins</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><Cart /></Nav.Link>
                        <Nav.Link href="/search"><Search /></Nav.Link>
                        <Nav.Link href="/contact"><QuestionCircle /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
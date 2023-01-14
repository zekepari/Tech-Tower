import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Cart, Search, QuestionCircle } from 'react-bootstrap-icons'
import { useMediaQuery } from 'react-responsive'

function Navigation() {
    const isMin = useMediaQuery({query: '(min-width: 576px)'})

    //className={isMin ? "flex-column" : "" }
    //className={(isMin ? "d-inline-block" : "d-flex")}

    return (
        <Navbar expand="sm">
            <Container className={isMin ? "flex-column" : "" }>
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
                    <Nav className="me-auto">
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
                    <Nav>
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
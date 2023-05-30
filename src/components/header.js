import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

//Components
import Logo from "./logo"
import Button from "./button1"

//styles
import * as styles from "../styles/components/header.module.css"

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Locations",
    link: "/locations",
  },
]

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {links.map(link => (
                <>
                  <Nav.Link href={`${link.link}`} className={styles.navlink}>
                    {link.name}
                  </Nav.Link>
                </>
              ))}
            </Nav>

            <Nav.Link className="text-light pe-4" href="#">
              Login
            </Nav.Link>
            <div className="d-block d-sm-none p-3" />
            <Nav.Link className="text-light" href="#">
              <Button ButtonName="Get started" />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

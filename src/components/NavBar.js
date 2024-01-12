import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/bg.png"
import "animate.css";
import "animate.css";

export const NavBar = () => {
    const [s1,s2,s3,s4]=["Contact Me","Home","Skills","Project"]
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{s2}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{s3}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{s4}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <button className="vvd" onClick={() => window.location.href = 'mailto:your-email@example.com'}>
                <span>{s1}</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
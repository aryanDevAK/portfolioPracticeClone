import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { ArrowUpCircle } from 'react-bootstrap-icons';
import logo from "../assets/img/bg.png"

export const Footer = () => {
  const date = new Date();
  let year = date.getFullYear().toString();
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/"><img src={navIcon1} alt="Icon" /></a>
              <a href="/"><img src={navIcon2} alt="Icon" /></a>
              <a href="/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&copy; Copyright {year}. All Rights Reserved</p>
            <a href="#home"><ArrowUpCircle size={20} color="white" /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

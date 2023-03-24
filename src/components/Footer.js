import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedin from "../assets/img/linkedin.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/walter-jimenez9522/" target="_blank"><img src={linkedin} alt="Icon" /></a>
              <a href="ttps://www.facebook.com/JimenezWalterLds" target="_blank"><img src={facebook} alt="Icon" /></a>
              <a href="https://www.instagram.com/walterjimenez2210/" target="_blank"><img src={instagram} alt="Icon" /></a>
            </div>
            <p>&copy; 2023 Walter Jiménez. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

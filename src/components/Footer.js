import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <h3>Raj Sawant</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"> 
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/raj-sawant-2001b425b"target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/rajs1437"target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://instagram.com/raj_.sawant?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={navIcon3} alt="" /></a>
              
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

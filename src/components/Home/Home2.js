import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Software (Front-End) Develoepr</b> with extensive experience in <b className="purple">Front-End</b> and <b className="purple">Back-End</b> development. 
              I specialize in creating robust and scalable frontend solutions that deliver exceptional user experiences.
              <br />
              <br />
              On the front-end, I proficiently utilize technologies such as{" "}
              <b className="purple">
              Javascript, React.js, Angular, Vue, HTML, CSS, and Bootstrap
              </b>{" "}
              to craft intuitive interfaces.
              <br />
              <br />
              In the realm of back-end development, I have a strong command of{" "}
              <b className="purple">
              Java (Spring Boot), Python (Django, Flask), Node.js (Express.js)
              </b>{" "}
              to craft intuitive interfaces.
              <br />
              <br />
              When I'm not busy with my professional pursuits, I'm dedicated to my family and enjoy spending quality
              time with my kids. I'm an avid sports enthusiast, with a particular passion for&nbsp;
              
                <b className="purple">soccer, baseball, and tennis.</b> Additionally, I have an insatiable wanderlust, 
                which has led me to explore and travel the world extensively. Whether I'm on a beach, scaling a mountain, or immersed in a new culture, 
                I'm always seeking exciting new adventures to embark on. 
                In quieter moments, you might find me engrossed in a <b className="purple"> captivating book.</b> .
              
              <br />
              <br />My adventure in the tech realm began with an insatiable curiosity about emerging technologies and
              their potential to shape our world. I decided to turn that curiosity into something tangible, and 
              that's how&nbsp; 
              <b><a
                href="https://smartspate.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
                className="purple"
              >
                SmartSapte
              </a></b>
              &nbsp;was born. 
              <br />
              <br />
              It's become my mission to provide valuable insights into the latest tech trends, 
              industry news, and expert opinions for tech enthusiasts, entrepreneurs, and professionals alike.
              <br />
              <br />
              I'm committed to delivering top-notch, relevant content that keeps you informed and inspired. 
              With my finger on the pulse of the tech world, 
              I continue to share my knowledge through engaging articles, tutorials, and thought-provoking discussions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlexMaisiura"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alex-maisiura"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

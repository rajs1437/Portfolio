import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chat from "../assets/project/Chat.png";
import headphone from "../assets/project/headphone.png";
import hulu from "../assets/project/hulu.png";
import movei from "../assets/project/movei.png";
import Music from "../assets/project/music.png";
import Weather from "../assets/project/weather.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Realtime Chat Application",
      description: "Building a Realtime Chat Application utilizing NodeJs and socket.io. API",
      imgUrl: chat,
      // view:'https://youtube-clone-10b2tqhds-omkar01111.vercel.app/?vercelToolbarCode=ADUYObJlqI1p6rT',
      code:'https://github.com/rajs1437?tab=repositories'
    },
    {
      title: "Bytebeats Headphone Website",
      description: "Headphone website using JavaScript",
      imgUrl: headphone,
      // view:'https://weather-web-puce.vercel.app/?vercelToolbarCode=tCrLsq-X_ANO6cq',
      code:'https://github.com/rajs1437?tab=repositories'
    },
    {
      title: "hulu clone Application",
      description: "Hulu clone website using JavaScript",
      imgUrl:hulu ,
      // view:'https://crypto-app-five-delta.vercel.app/?vercelToolbarCode=Aa_6MI8gODeKZAT',
      code:'https://github.com/rajs1437?tab=repositories'
    },
    {
      title: "Movei Seat Booking system",
      description: "Basic Movei Seat booking system using Javascript",
      imgUrl: movei,
      // view:'https://react-chakra-responsive-1.vercel.app/',
      code:'https://github.com/rajs1437?tab=repositories'
    },
    {
      title: "Soundwave Music Company",
      description: "Making Website for €soundwave Music Company website using JavaScript",
      imgUrl: Music,
      // view:'https://the-hydra.vercel.app/?vercelToolbarCode=nuL9uJZb7nxG6T5',
      code:'https://github.com/rajs1437?tab=repositories'
    },
    {
      title: "Weather App",
      description: "Building a Realtime weather Application Using React Js OpenWeatherMap API",
      imgUrl: Weather,
      // view:'https://weather-web-g1b7.vercel.app/?vercelToolbarCode=VJK5tUVP2LTky69',
      code:'https://github.com/rajs1437?tab=repositories'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the projects I have worked on:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import '../styles/Projects.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import encriptador from "../assets/img/Encriptador.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Encriptador de Texto",
      description: "Un encriptador de texto que sustituye las vocales por otras letras o palabras específicas.",
      imgUrl: encriptador,
      link: "https://privado11.github.io/Encriptador-de-textos/",
    },
    {
      title: "proyecto 2",
      description: "proyecro 2",
      imgUrl: encriptador,
    },
    {
      title: "Proyecto 3",
      description: "Proyecto 3",
      imgUrl: encriptador,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Estos son algunos de los proyectos que he realizado. Cada uno de ellos ha sido una oportunidad para aprender nuevas tecnologías y habilidades, y para aplicarlas en la creación de soluciones innovadoras y atractivas para los usuarios. Espero que disfrutes explorando estos proyectos tanto como yo disfruté trabajando en ellos.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                                href={project.link}
                                />
                            )
                          })
                        }
                      </Row>
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

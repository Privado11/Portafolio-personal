import '../styles/ProjectCard.css';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="div-button">
            <button variant="primary" onClick={handleClick} className="show-project">Ver proyecto</button>
          </div>
        </div>
      </div>
    </Col>
  )
}

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, sourceCode, deploymentLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="projects" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> 
        
          <div className="source-deployment">
          {sourceCode && 
          <a href={sourceCode} target="_blank" rel="noopener noreferrer"><span>Source Code</span></a>
        }
        {
          deploymentLink && 
         <a href={deploymentLink} target="_blank" rel="noopener noreferrer"><span>Deployment URL</span></a>
        }
        </div>
        </div>
      </div>
    </Col>
  )
}

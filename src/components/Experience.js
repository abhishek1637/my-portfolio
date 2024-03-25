import { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ExperienceCard } from "./ExperienceCard";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/my-portfolio-img.png";
import projImg2 from "../assets/img/e-learning.jpg";
import projImg3 from "../assets/img/heart-disease.jpg";

const myExperiencesInPowerSchool = {
  engineer1: {
    startDate: "03/2024",
    endDate: "Present",
    location: "Bengaluru, India",
    bulletPoints: [
      "Contributed as a vital member of a dynamic team dedicated to developing cutting-edge Gen AI products and enhancing existing offerings through Gen AI integration.",
      "Worked on four Gen AI Micro-frontend projects - Passage Generation, Single item gen, Bulk item gen and ai chatbot, demonstrating leadership by spearheading two of them to successful completion.",
      "Additionally, played a pivotal role in seamlessly integrating these Gen AI initiatives with two prominent products within the PowerSchool ecosystem.",
      "Implemented Authorization of these products.",
      "Mentored 2 associate engineers and 1 intern for the team.",
      "Skills which I learned and used: React redux, typescript, Java, PHP, Drupal, aws, aws-cdk, openAI, gitlab ci-cd, Micro-Frontend"
    ]
  },
  associateEngineer2: {
    startDate: "07/2022",
    endDate: "03/2024",
    location: "Bengaluru, India",
    bulletPoints: [
      "Experience on working in Microfrontend.",
      "Done Spike and Tech design for implementing MFE",
      "Led many projects: Accessibility checker (ref: https://docs.powerschool.com/SGYH/en/additional-features/accessibility-checker), inline linking in RTE, searching",
      "Worked on aws opensearch to add search functionality in schoology message.",
      "Created deep link or REST APIs using Laravel to integrate two products and developed many SPAs using React Js with TypeScript within schoology.",
      "On-call for the whole schoology product.",
      "Solved maximum number of tickets in one sprint in the team. Recognized in Sprint Championship.",
      "Awarded for above and beyond employee, got a number of awards and recognition for the work."
    ]
  },
  engineeringIntern: {
    startDate: "08/2021",
    endDate: "06/2022",
    location: "Bengaluru, India",
    bulletPoints: [
      "Fixed 100 of bugs in schoology.",
      "Worked on LTI projects like google and microsoft LTI 1.3.",
      "Implemented new features such as calendar color and events in schoology.",
      "Worked and learned JavaScript, TypeScript, React js, Php, Drupal.",
      "Got the best intern award and associate engineer 2 job."
    ]
  }
};

const projects = [
  {
    title: "My Portfolio",
    description: "My portfolio project, built using React and Bootstrap, showcases my skills, projects, and experiences in a visually appealing and responsive manner",
    imgUrl: projImg1,
    sourceCode: 'https://github.com/abhishek1637/my-portfolio',
    deploymentLink: 'https://google.com',
  },
  {
    title: "e-Learning website",
    description: "My e-learning project, developed using HTML, CSS, JavaScript, and PHP, offers an interactive platform for users to access educational materials and engage in online learning activities",
    imgUrl: projImg2,
    sourceCode: 'https://github.com/abhishek1637/e-learning',
    deploymentLink: '',
  },
  {
    title: "Heart Disease Prediction",
    description: "My heart disease prediction project, one of my college project, implemented in R language using the Naive Bayes algorithm and other data mining techniques, aims to provide accurate predictions of heart disease risk based on various patient attributes and medical data.",
    imgUrl: projImg3,
    sourceCode: 'https://github.com/abhishek1637/Heart-disease-prediction/tree/main',
    deploymentLink: '',
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (event.target.closest("#projects") === null) {
          setActiveTab("");
        }
      };
  
      document.body.addEventListener("click", handleClickOutside);
  
      return () => {
        document.body.removeEventListener("click", handleClickOutside);
      };
    }, []);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={`animate__animated ${isVisible ? "animate__fadeIn" : ""}`}>
                <h2>Experiences </h2> <br />
                <p style={{color: "#777", fontSize: "0.9rem", marginBottom: "20px"}}>Click the respective tabs to see my experiences or projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="powerSchool" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="powerSchool">PowerSchool</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="myProjects">My Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {(activeTab === "powerSchool" || activeTab === "first" || activeTab === "second" || activeTab === "third") &&
                      <>
                        <Tab.Pane eventKey="powerSchool">
                          {/* Content for PowerSchool tab goes here */}
                        </Tab.Pane>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Engineer 1</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Associate Engineer 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Engineering Intern</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </>
                    }
                    {activeTab !== "myProjects" &&
                      <>
                        <Tab.Pane eventKey="first">
                          <ExperienceCard 
                            startDate={myExperiencesInPowerSchool.engineer1.startDate}
                            endDate={myExperiencesInPowerSchool.engineer1.endDate}
                            location={myExperiencesInPowerSchool.engineer1.location}
                            bulletPoints={myExperiencesInPowerSchool.engineer1.bulletPoints}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <ExperienceCard 
                            startDate={myExperiencesInPowerSchool.associateEngineer2.startDate}
                            endDate={myExperiencesInPowerSchool.associateEngineer2.endDate}
                            location={myExperiencesInPowerSchool.associateEngineer2.location}
                            bulletPoints={myExperiencesInPowerSchool.associateEngineer2.bulletPoints}
                          />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <ExperienceCard 
                            startDate={myExperiencesInPowerSchool.engineeringIntern.startDate}
                            endDate={myExperiencesInPowerSchool.engineeringIntern.endDate}
                            location={myExperiencesInPowerSchool.engineeringIntern.location}
                            bulletPoints={myExperiencesInPowerSchool.engineeringIntern.bulletPoints}
                          />
                        </Tab.Pane>
                      </>
                    }
                    {activeTab === "myProjects" &&
                      <Tab.Pane eventKey="myProjects">
                        {/* Content for My Projects tab goes here */}
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
                    }
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="project"></img>
    </section>
  )
}

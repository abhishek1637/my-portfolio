import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2> <br /> <br />
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="React" />
                                <h5> React JS and Redux </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="js" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="ai" />
                                <h5> Generative AI </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="mfe" />
                                <h5>Micro-Frontend</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="TS" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="aws" />
                                <h5>aws</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="cpp" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="php" />
                                <h5>PHP Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="bdd" />
                                <h5>BDD Integration Test</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="java" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="clrSharp" />
    </section>
  )
}

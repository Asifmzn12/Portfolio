import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { AiOutlineLaptop, AiFillGithub } from "react-icons/ai";
import { projects } from "./config/projectcustomapi";
function Projects() {
    return (
        <Container className="py-5">
            <h1 className="text-center fw-bold mb-5">Projects</h1>

            <div className="row justify-content-md-evenly justify-content-lg-start align-items-center gap-4 gap-md-0 gap-xl-0 ">
                {projects.map((projectData) => (
                    <div data-aos="fade-right" className="  col-md-6 col-lg-4 col-xl-3 mt-md-2 mt-lg-2  mt-xl-0 " key={projectData.id}>
                        <Card className=" mylang p-3 ">
                            <Card.Img variant="top" src={projectData.image} />
                            <Card.Body className="py-4">
                                <Card.Title className="h2">
                                    {projectData.Project_Name}
                                </Card.Title>
                                <Card.Text className="project-info">
                                    {projectData.summery}
                                </Card.Text>

                                <div className="row py-4  align-items-center fw-light">
                                    <div className="col-6 text-start" >
                                        <a
                                            href="#"
                                            className="text-decoration-none text-white text-uppercase "
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h6 className="learnmore d-flex justify-content-center align-items-center">
                                                <AiOutlineLaptop />
                                                &nbsp;Demo
                                            </h6>
                                        </a>
                                    </div>
                                    <div className=" col-6  text-center  ">
                                        <a
                                            href="#"
                                            className="text-decoration-none text-white text-uppercase"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h6 className="learnmore">
                                                <AiFillGithub />
                                                &nbsp;Code
                                            </h6>
                                        </a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Projects;

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import { AiOutlineLaptop, AiFillGithub } from "react-icons/ai";
import { projects } from "./config/projectcustomapi";

function Projects() {
    const notify = () => toast(<h6>Oops!😔 Something went wrong. I&apos;m  on it and will fix the issue shortly. </h6>);

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">Projects</h2>

      <div className="row justify-content-md-evenly justify-content-lg-start align-items-center gap-4 gap-md-0 gap-xl-0">
        {projects.map((projectData) => (
          <div
            data-aos="fade-right"
            className="col-lg-6 col-xl-3 mt-md-2 mt-lg-2 mt-xl-0"
            key={projectData.id}
          >
            <div className="mylang p-3">
              <img className='img-fluid' src={projectData.image} />
              <div className="py-4">
                <div className="h5">{projectData.Project_Name}</div>
                <div className="project-info">{projectData.summery}</div>

                <div className="row py-4 align-items-center fw-light">
                  <div className="col-6 text-start">
                    <a
                      href={projectData.Demo === "notify" ? "" : projectData.Demo}
                      className="text-decoration-none text-white text-uppercase"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (projectData.Demo === "notify") {
                          e.preventDefault();
                          notify();
                        }
                      }}
                    >
                      <h6 className="learnmore d-flex align-items-center">
                        <AiOutlineLaptop />
                        &nbsp;Demo
                      </h6>
                    </a>
                  </div>
                  <div className="col-6 text-center">
                    <a
                      href={projectData.Source}
                      className="text-decoration-none text-white text-uppercase"
                      rel="noopener noreferrer"
                    >
                      <h6 className="learnmore">
                        <AiFillGithub />
                        &nbsp;Code
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function App() {
  return (
    <div>
      <ToastContainer />
      <Projects />
    </div>
  );
}

export default App;

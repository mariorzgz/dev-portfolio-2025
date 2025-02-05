import React from "react";

import { webprojects } from "../data";

class Viewer extends React.Component {
  closeViewer(){
    console.log("close web")
    const viewer = document.getElementById("viewer");
    const body = document.querySelector("body");
    viewer.classList.remove("open-viewer");
    body.classList.remove("no-scroll");
    setTimeout(function () {
      viewer.close();
    }, 400);
  }

  render(){
    const id = this.props.id
    const project = webprojects[id]

    const skills = project.skills.map(skill => {
      return(
      <li key={skill}>{skill}</li>
      )
    });

    return(
      <>
        <dialog id="viewer" className={this.props.type} 
        aria-modal="true">

          <div className="box">

            <div role="button" tabIndex={0} id="close" data-cursor="close" 
            className="close-icon" 
            onClick={this.closeViewer}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                this.closeViewer(e)
            }}
            >
              ✕
            </div>

            <div className="d-flex align-items-center padding-x project-container">
              <div className="width-33 project-info">
                <h2 id="title" className="margin-0">{project.title}</h2>
                <p id="description" className="margin-0">{project.description}</p>
              </div>

              <div className="width-66 padding-x text-right video-container">
                <video className="video"
                  alt={project.title}
                  src={project.video}
                  autoPlay muted loop>
                  <source type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </div>

            <div className="padding-x align-items-center project-attributes">

              <p>Year: {project.year}</p>

              <ul className="skills justify-content-around">
                {skills}
              </ul>
              {project.link.length > 0 &&
                <a className="project-link" target="_blank" rel="noreferrer" href={project.link}>Visit page</a>
              }

            </div>
          </div>
        </dialog>
      </>
    )
  }

}

export default Viewer;

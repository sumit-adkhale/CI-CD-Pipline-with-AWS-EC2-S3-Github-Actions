import React from "react";
import ProjectsHeading from "./ProjectsHeading";
import ProjectCard from "./ProjectCard";

function Projects() {
  const myProjects = [
    {
      img: "/project_7.png",
      Weblink: "https://react-landing-page-1-sumit-adkhale.netlify.app/",
    },
    {
      img: "/project_1.png",
      Weblink: "https://sumit-adkhale.github.io/Club-Animation-Website/",
    },
    {
      img: "/project_2.png",
      Weblink: "https://sumit-adkhale.github.io/Landing-Page-1/",
    },
    {
      img: "/project_3.png",
      Weblink: "https://sumit-adkhale.github.io/Landing-Page-2/",
    },
    {
      img: "/project_4.png",
      Weblink: "https://sumit-adkhale.github.io/Landing-Page-3/",
    },
    {
      img: "/project_5.png",
      Weblink: "https://sumit-adkhale.github.io/Landing-Page-4/",
    },
    {
      img: "/project_6.png",
      Weblink: "https://sumit-adkhale.github.io/Landing-Page-5/",
    },
  ];
  return (
    <>
      <div className="w-full h-full" id="projects">
        <div className="w-full">
          <ProjectsHeading />
        </div>
        <div className="lg:flex  lg:flex-wrap w-full h-full lg:px-16">
          {myProjects.map((i, index) => {
            return <ProjectCard img={i.img} weblink={i.Weblink} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;

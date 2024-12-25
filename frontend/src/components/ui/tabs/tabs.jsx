import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Cards } from "../cards";
import { projects } from "@/data/projects";

const TabsProject = ({ currentPage }) => {
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const allProjects = projects;
  const websiteProjects = projects.filter(
    (project) => project.projectType === "Website"
  );
  const apiProjects = projects.filter(
    (project) => project.projectType === "API"
  );

  const getCurrentProjects = (projectsList) => {
    return projectsList.slice(startIndex, endIndex);
  };

  return (
    <Tabs
      aria-label="Options"
      variant="underlined"
      className="mb-10 font-semibold"
    >
      <Tab key="All" title={`All (${allProjects.length})`} className="text-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
          {getCurrentProjects(allProjects).map((project, index) => (
            <Cards.CardProject
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              link_sourceCode={project.link_sourceCode}
              link_demo={project.link_demo}
              techStack={project.techStack}
              projectType={project.projectType}
            />
          ))}
        </div>
      </Tab>
      <Tab key="Website" title="Website" className="text-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
          {getCurrentProjects(websiteProjects).map((project, index) => (
            <Cards.CardProject
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              link_sourceCode={project.link_sourceCode}
              link_demo={project.link_demo}
              techStack={project.techStack}
              projectType={project.projectType}
            />
          ))}
        </div>
      </Tab>
      <Tab key="API" title="API" className="text-md">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
          {getCurrentProjects(apiProjects).map((project, index) => (
            <Cards.CardProject
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              link_sourceCode={project.link_sourceCode}
              link_demo={project.link_demo}
              techStack={project.techStack}
              projectType={project.projectType}
            />
          ))}
        </div>
      </Tab>
    </Tabs>
  );
};

export default TabsProject;

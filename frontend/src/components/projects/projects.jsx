import React, { useState } from "react";
import TabsProject from "../ui/tabs";
import TitleWithSub from "../ui/title";
import { Pagination } from "@nextui-org/react";
import { projects } from "@/data/projects";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("All");

  let itemsPerPage = 6;

  const getFilteredProjects = () => {
    switch (activeTab) {
      case "Website":
        return projects.filter((p) => p.projectType === "Website");
      case "API":
        return projects.filter((p) => p.projectType === "API");
      default:
        return projects;
    }
  };

  const getTotalPages = () => {
    const filteredProjects = getFilteredProjects();
    return Math.ceil(filteredProjects.length / itemsPerPage);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setCurrentPage(1);
  };

  return (
    <section id="project" className="mb-64">
      <TitleWithSub title={"Projects"} subtitle={"Most recent work"} />
      <div className="flex flex-col items-center justify-center">
        <TabsProject
          currentPage={currentPage}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {getTotalPages() > 1 && (
          <Pagination
            showControls
            total={getTotalPages()}
            variant="light"
            page={currentPage}
            onChange={handlePageChange}
            className="mt-8"
          />
        )}
      </div>
    </section>
  );
};

export default Projects;

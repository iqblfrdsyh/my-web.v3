"use client";

import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { Tables } from "@/components/ui/admin/tables/tables";
import { Forms } from "@/components/ui/admin/forms/forms";
import AdminLayout from "@/components/layouts/adminLayout/admin.layout";

const Project = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    link: "",
    image: null,
    techStack: [],
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProjectData({ ...projectData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, projectData]);
    setProjectData({
      title: "",
      description: "",
      link: "",
      image: null,
      techStack: [],
    });
  };

  return (
    <AdminLayout title={"Manage Project"}>
      <Forms.Project
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        projectData={projectData}
        setProjectData={setProjectData}
      />

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Uploaded Projects</h2>
        <Tables.Project projects={[]} setProjects={setProjectData} />
      </div>
    </AdminLayout>
  );
};

export default Project;

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";

const Tables = {
  Project: ({ projects, setProjects }) => {
    return (
      <Table aria-label="Project Table" css={{ height: "auto", width: "100%" }}>
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Description</TableColumn>
          <TableColumn>Tech Stack</TableColumn>
          <TableColumn>Link</TableColumn>
          <TableColumn>Image</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.techStack.join(", ")}</TableCell>
              <TableCell>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </TableCell>
              <TableCell>
                {project.image ? (
                  <img
                    src={URL.createObjectURL(project.image)}
                    alt="Project"
                    className="w-16 h-16 object-cover rounded"
                  />
                ) : (
                  "No image"
                )}
              </TableCell>
              <TableCell>
                <Button
                  size="sm"
                  color="error"
                  onClick={() => {
                    setProjects(projects.filter((_, i) => i !== index));
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
  Skill: ({ skills }) => {
    return (
      <Table aria-label="Project Table" css={{ height: "auto", width: "100%" }}>
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Icon</TableColumn>
        </TableHeader>
        <TableBody>
          {skills.map((skill, index) => (
            <TableRow key={index}>
              <TableCell>{skill.title}</TableCell>
              <TableCell>
                <Image src={skill.icon} alt="skill" fill />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export { Tables };

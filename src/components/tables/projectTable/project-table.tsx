"use client";

import { createContext, useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const ProjectsContext = createContext({
  deleteProjectById: (id: string) => {},
});

export default function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteProjectById = (id: string) => {
    const updatedProjects = projects.filter(
      (project: IProject) => project.id !== id
    );
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  useEffect(() => {
    const projects =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("projects") || "[]")
        : [];
    setProjects(projects);
    setIsLoading(false);
  }, []);

  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProjectsContext.Provider value={{ deleteProjectById }}>
          <DataTable columns={columns} data={projects} />
        </ProjectsContext.Provider>
      )}
    </div>
  );
}

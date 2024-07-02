"use client";

import { RedirectIconButton } from "@/components/RedirectIconButton";
import { ProjectList } from "@/components/lists/ProjectList";
import { ProjectTable } from "@/components/tables/projectTable/project-table";
import { localStorageProjectKey } from "@/constants/localStorageProjectKey";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PlusIcon } from "@/icons/PlusIcon";
import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext({
  deleteProjectById: (id: string) => {},
});

const desktop = "(min-width: 768px)";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery(desktop);

  const deleteProjectById = (id: string) => {
    const updatedProjects = projects.filter(
      (project: IProject) => project.id !== id
    );
    setProjects(updatedProjects);
    localStorage.setItem(
      localStorageProjectKey,
      JSON.stringify(updatedProjects)
    );
  };

  useEffect(() => {
    const projects =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(localStorageProjectKey) || "[]")
        : [];
    setProjects(projects);
    setIsLoading(false);
  }, []);

  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col">
      <div className="flex w-full justify-between items-center border px-3 md:px-10 py-2">
        <h1 className="text-xl md: text-2xl font-bold">My Projects</h1>
        <RedirectIconButton
          text="Add Project"
          href="/backoffice/my-projects/add-project"
          variant={"destructive"}
          icon={<PlusIcon />}
        />
      </div>
      <ProjectsContext.Provider value={{ deleteProjectById }}>
        {isDesktop ? (
          <div className="container max-w-screen-2xl mx-auto py-4">
            <ProjectTable projects={projects} isLoading={isLoading} />
          </div>
        ) : (
          <ProjectList projects={projects} isLoading={isLoading} />
        )}
      </ProjectsContext.Provider>
    </div>
  );
}

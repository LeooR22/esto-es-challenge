import React, { FC } from "react";
import { ProjectCard } from "../cards/ProjectCard";

interface Props {
  projects: IProject[];

  isLoading: boolean;
}

export const ProjectList: FC<Props> = ({ isLoading, projects }) => {
  return (
    // <div className=" mx-4 py-4">
    //   <ProjectCard />
    // </div>
    <div className="container mx-auto py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

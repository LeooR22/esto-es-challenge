"use client";

import { MutationHeader } from "@/components/MutationHeader";
import { ProjectForm } from "@/components/forms/ProjectForm";
import { localStorageProjectKey } from "@/constants/localStorageProjectKey";

export default function Page({ params }: { params: any }) {
  const projectId = params.projectId;

  const projects: IProject[] = JSON.parse(
    localStorage.getItem(localStorageProjectKey) || "[]"
  );

  const project = projects.find((project: any) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col">
      <MutationHeader href="/backoffice/my-projects" text="Edit project" />

      <ProjectForm initialData={project} />
    </div>
  );
}

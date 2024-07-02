"use client";

import { FC } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

interface Props {
  projects: IProject[];
  isLoading: boolean;
}

export const ProjectTable: FC<Props> = ({ projects, isLoading }) => {
  return (
    <div className="container mx-auto py-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DataTable columns={columns} data={projects} />
      )}
    </div>
  );
};

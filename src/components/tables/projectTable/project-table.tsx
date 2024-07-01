"use client";

import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProjectTable() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <DataTable columns={columns} data={projects} />
      )}
    </div>
  );
}

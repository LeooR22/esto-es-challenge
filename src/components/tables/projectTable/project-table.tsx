"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProjectTable() {
  const projects =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("projects") || "[]")
      : [];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={projects} />
    </div>
  );
}

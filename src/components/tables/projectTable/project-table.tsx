"use client";

import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   //   return [
//   //     {
//   //       id: "728ed52f",
//   //       amount: 100,
//   //       status: "pending",
//   //       email: "m@example.com",
//   //     },
//   //     // ...
//   //   ];
// }

export default function ProjectTable() {
  //   const data = await getData();
  // read projects from local storage
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={projects} />
    </div>
  );
}

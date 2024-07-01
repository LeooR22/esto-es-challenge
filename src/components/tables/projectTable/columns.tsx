"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<IProject>[] = [
  {
    header: "Project info",
    accessorKey: "projectName",
    cell: ({ row }) => {
      const projectName = row.original.projectName;
      const createdAt = row.original.createdAt;

      return (
        <div>
          <div>{projectName}</div>
          <div className="text-gray-500">
            {`Creation date: ${new Date(createdAt).toLocaleDateString("en-US", {
              month: "2-digit",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}`}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "projectManager",
    header: "Project Manager",
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned to",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    // id: "actions",
    accessorKey: "Action",
    enableHiding: false,
    cell: ({ row }: { row: any }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      const projectId = row.original.id;

      const handleGoToEditPage = () => {
        router.push(`/backoffice/my-projects/edit-project/${projectId}`);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsVerticalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleGoToEditPage}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => console.log("delete project", projectId)}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

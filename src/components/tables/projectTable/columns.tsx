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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DeleteDialog } from "./delete-dialog";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/utils/getInitials";
import { getRandomAvatarColor } from "@/utils/getRandomAvatarColor";

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
    cell: ({ row }) => {
      const projectManager = row.original.projectManager;

      return (
        <div className="flex flex-rom items-center">
          <Avatar>
            <AvatarImage
              src={projectManager.avatarImageUrl}
              alt={`${projectManager.name} profile photo`}
            />
            <AvatarFallback>{getInitials(projectManager.name)}</AvatarFallback>
          </Avatar>
          <span className="ml-2">{projectManager.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "assignedTo",
    header: "Assigned to",
    cell: ({ row }) => {
      const assignedTo = row.original.assignedTo;

      return (
        <div className="flex flex-row items-center">
          <Avatar>
            <AvatarImage
              src={assignedTo.avatarImageUrl}
              alt={`${assignedTo.name} profile photo`}
            />
            <AvatarFallback
              className="text-white"
              style={{
                backgroundColor:
                  assignedTo.avatarColor || getRandomAvatarColor(),
              }}
            >
              {getInitials(assignedTo.name)}
            </AvatarFallback>
          </Avatar>
          <span className="ml-2">{assignedTo.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <>
          {status === "Enabled" ? (
            <Badge>{status}</Badge>
          ) : (
            <Badge variant={"destructive"}>{status}</Badge>
          )}
        </>
      );
    },
  },
  {
    // id: "actions",
    accessorKey: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      const projectId = row.original.id;
      const projectName = row.original.projectName;

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

            <DeleteDialog projectId={projectId} projectName={projectName} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

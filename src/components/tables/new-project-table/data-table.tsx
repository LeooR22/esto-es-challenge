import React, { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLocaleDateString } from "@/utils/getLocaleDateString";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/utils/getInitials";
import { Badge } from "@/components/ui/badge";
import { DotsVerticalIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DeleteProjectResponsiveMoDal } from "@/components/modal/DeleteProjectResponsiveMoDal";

interface Props {
  projects: IProject[];
  deleteProjectById: (id: string) => void;
}

export const DataTable: FC<Props> = ({ projects, deleteProjectById }) => {
  const router = useRouter();

  const handleGoToEditPage = (projectId: string) => {
    router.push(`/backoffice/my-projects/edit-project/${projectId}`);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project info</TableHead>
          <TableHead>Project Manager</TableHead>
          <TableHead>Assigned to</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects?.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium">
              <div>
                <div>{project.projectName}</div>
                <div className="text-gray-500">
                  {`Creation date: ${getLocaleDateString(project.createdAt)}`}
                </div>
              </div>
            </TableCell>
            <TableCell className="font-medium">
              <div className="flex flex-rom items-center">
                <Avatar>
                  <AvatarImage
                    src={project.projectManager.avatarImageUrl}
                    alt={`${project.projectManager.name} profile photo`}
                  />
                  <AvatarFallback
                    className="text-white"
                    style={{
                      backgroundColor: project.projectManager.avatarColor,
                    }}
                  >
                    {getInitials(project.projectManager.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="ml-2">{project.projectManager.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-row items-center">
                <Avatar>
                  <AvatarImage
                    src={project.assignedTo.avatarImageUrl}
                    alt={`${project.assignedTo.name} profile photo`}
                  />
                  <AvatarFallback
                    className="text-white"
                    style={{
                      backgroundColor: project.assignedTo.avatarColor,
                    }}
                  >
                    {getInitials(project.assignedTo.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="ml-2">{project.assignedTo.name}</span>
              </div>
            </TableCell>
            <TableCell>
              {project.status === "Enabled" ? (
                <Badge>{project.status}</Badge>
              ) : (
                <Badge variant={"destructive"}>{project.status}</Badge>
              )}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <DotsVerticalIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() => handleGoToEditPage(project.id)}
                  >
                    <Pencil2Icon className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DeleteProjectResponsiveMoDal
                    projectId={project.id}
                    projectName={project.projectName}
                    deleteProjectById={deleteProjectById}
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

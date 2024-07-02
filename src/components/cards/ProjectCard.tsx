import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DeleteDialog } from "../tables/projectTable/delete-dialog";
import { useRouter } from "next/navigation";
import { getInitials } from "@/utils/getInitials";
import { getRandomAvatarColor } from "@/utils/getRandomAvatarColor";
import { getLocaleDateString } from "@/utils/getLocaleDateString";

import { Badge } from "@/components/ui/badge";

interface Props {
  project: IProject;
  deleteProjectById: (id: string) => void;
}

export const ProjectCard: React.FC<Props> = ({
  project,
  deleteProjectById,
}) => {
  const { projectName, id, assignedTo, createdAt, status } = project;
  const router = useRouter();

  const handleGoToEditPage = () => {
    router.push(`/backoffice/my-projects/edit-project/${id}`);
  };

  return (
    // <Card className="w-[350px]">
    <Card className="bg-gray-100 dark:bg-gray-800">
      <CardHeader className="flex flex-row justify-between ">
        <div>
          <CardTitle className="flex flex-row justify-between items-center mb-1">
            <p>{projectName}</p>
            {status === "Enabled" ? (
              <Badge>{status}</Badge>
            ) : (
              <Badge variant={"destructive"}>{status}</Badge>
            )}
          </CardTitle>
          <CardDescription>{`Creation date: ${getLocaleDateString(
            createdAt
          )}`}</CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsVerticalIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleGoToEditPage}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DeleteDialog
              projectId={id}
              projectName={projectName}
              deleteProjectById={deleteProjectById}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardFooter className="gap-2">
        <Avatar>
          <AvatarImage
            src={assignedTo.avatarImageUrl}
            alt={`${assignedTo.name} profile photo`}
          />
          <AvatarFallback
            className="text-white"
            style={{
              backgroundColor: assignedTo.avatarColor || getRandomAvatarColor(),
            }}
          >
            {getInitials(assignedTo.name)}
          </AvatarFallback>
        </Avatar>
        {assignedTo.name}
      </CardFooter>
    </Card>
  );
};

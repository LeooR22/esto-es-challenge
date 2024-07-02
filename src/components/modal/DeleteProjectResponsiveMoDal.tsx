import { TrashIcon } from "@radix-ui/react-icons";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "../credenza";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { FC } from "react";
import { Button } from "../ui/button";

interface Props {
  projectId: string;
  projectName: string;
  deleteProjectById: (id: string) => void;
}

export const DeleteProjectResponsiveMoDal: FC<Props> = ({
  projectId,
  projectName,
  deleteProjectById,
}) => {
  const handleDelete = () => {
    deleteProjectById(projectId);
  };

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <TrashIcon className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader className="mb-2 md:mb-0">
          <CredenzaTitle>
            Are you sure you want to delete the project: {projectName}
          </CredenzaTitle>
        </CredenzaHeader>
        <CredenzaBody>
          This action cannot be undone. This will permanently delete the project
          and remove the data from our servers.{" "}
        </CredenzaBody>
        <CredenzaFooter className="gap-2 py-4 md:py-0 my-5 md:my-0 ">
          <CredenzaClose asChild>
            <Button variant={"outline"} className="mb-2 md:mb-0">
              Cancel
            </Button>
          </CredenzaClose>
          <Button onClick={handleDelete}>Delete</Button>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

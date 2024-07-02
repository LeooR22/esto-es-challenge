import { getRandomManagerId } from "@/utils/getRandomManager";
import { v4 as uuidv4 } from "uuid";
import { persons } from "./persons";
import { getRandomPersonByRole } from "@/utils/getRandomPersonByRole";

export const dbPopulateInitialProjects = (quantityInt: number): IProject[] => {
  let projects = [];
  for (let i = 0; i < quantityInt; i++) {
    const projectManagerId = getRandomManagerId();
    const projectManager: IUser = persons.find(
      (person) => person.id === projectManagerId
    )!;
    const assignedToId = getRandomPersonByRole("Employee");
    const assignedTo: IUser = persons.find(
      (person) => person.id === assignedToId
    )!;

    projects.push({
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      projectName: `Project ${i}`,
      status: i % 2 === 0 ? "Enabled" : "Disabled",
      description: `Description ${i}`,
      projectManagerId,
      projectManager,
      assignedToId,
      assignedTo,
    });
  }
  return projects;
};

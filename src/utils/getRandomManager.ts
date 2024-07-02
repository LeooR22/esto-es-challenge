import { persons } from "@/constants/persons";

export const getRandomManagerId = (): string => {
  const managers = persons.filter((person) => person.role === "Manager");
  const randomIndex = Math.floor(Math.random() * managers.length);
  return managers[randomIndex].id;
};

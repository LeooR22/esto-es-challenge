import { persons } from "@/constants/persons";

export const getRandomPersonByRole = (role: "Manager" | "Employee"): string => {
  const managers = persons.filter((person) => person.role === role);
  const randomIndex = Math.floor(Math.random() * managers.length);
  return managers[randomIndex].id;
};

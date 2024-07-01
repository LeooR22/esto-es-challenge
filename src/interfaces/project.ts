interface IProject {
  id: string;
  createdAt: string;
  updatedAt: string;
  projectName: string;
  projectManager: string;
  assignedTo: string;
  status: string;
  description?: string | undefined;
}

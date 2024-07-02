interface IProject {
  id: string;
  createdAt: string;
  updatedAt: string;
  projectName: string;
  status: string;
  description?: string | undefined;
  projectManagerId: string;
  assignedToId: string;
  projectManager: IUser;
  assignedTo: IUser;
}

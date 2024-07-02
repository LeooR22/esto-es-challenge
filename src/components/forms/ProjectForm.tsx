"use client";

import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { persons } from "@/constants/persons";
import { statusOptions } from "@/constants/statusOptions";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  initialData?: IProject;
}

const formSchema = z.object({
  projectName: z.string().min(2, {
    message: "Project name must be at least 2 characters.",
  }),
  description: z.string().optional(),
  projectManagerId: z.string().min(2, {
    message: "You must select a project manager",
  }),
  assignedToId: z.string().min(2, {
    message: "You must select a person",
  }),
  status: z.string().min(2, {
    message: "You must select a status",
  }),
});

export const ProjectForm: FC<Props> = ({ initialData }) => {
  const router = useRouter();

  const employees = persons.filter((person) => person.role === "Employee");
  const managers = persons.filter((person) => person.role === "Manager");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: initialData?.projectName || "",
      description: initialData?.description || "",
      projectManagerId: initialData?.projectManagerId || "",
      assignedToId: initialData?.assignedToId || "",
      status: initialData?.status || statusOptions[0].value,
    },
  });

  // 2. Define a submit handle  r.
  function onSubmit(values: z.infer<typeof formSchema>) {
    let project = {} as Partial<IProject>;

    if (initialData) {
      project = {
        ...initialData,
        ...values,
        projectManager: persons.find(
          (person) => person.id === values.projectManagerId
        ),
        assignedTo: persons.find((person) => person.id === values.assignedToId),
        updatedAt: new Date().toISOString(),
      };
    } else {
      project = {
        ...values,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        projectManager: persons.find(
          (person) => person.id === values.projectManagerId
        ),
        assignedTo: persons.find((person) => person.id === values.assignedToId),
      };
    }

    const projects = JSON.parse(localStorage.getItem("projects") || "[]");

    if (initialData) {
      const updatedProjects = projects.filter(
        (item: IProject) => item.id !== initialData.id
      );

      const projectsToSave = [project, ...updatedProjects];

      localStorage.setItem("projects", JSON.stringify(projectsToSave));
    } else {
      const projectsToSave = [project, ...projects];
      localStorage.setItem("projects", JSON.stringify(projectsToSave));
    }

    // redirect to the projects page
    router.push("/backoffice/my-projects");
  }

  return (
    <div className="container max-w-screen-sm mx-auto py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {initialData && (
            <>
              <FormField
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project ID*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="An awesome new project"
                        {...field}
                        value={initialData.id}
                        disabled
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name*</FormLabel>
                <FormControl>
                  <Input placeholder="An awesome new project" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Your description here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectManagerId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project manager*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a manager" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {managers.map((manager) => (
                      <SelectItem key={manager.id} value={manager.id}>
                        {manager.name} | {manager.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="assignedToId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assigned To*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a manager" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {employees.map((employee) => (
                      <SelectItem key={employee.id} value={employee.id}>
                        {employee.name} | {employee.role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status*</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a manager" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {statusOptions.map((status) => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"destructive"} type="submit">
            {initialData ? "Update project" : "Create project"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

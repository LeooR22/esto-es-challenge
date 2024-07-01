import { RedirectIconButton } from "@/components/RedirectIconButton";
import ProjectTable from "@/components/tables/projectTable/project-table";
import { PlusIcon } from "@/icons/PlusIcon";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col">
      <div className="flex w-full justify-between items-center border px-3 md:px-10 py-2">
        <h1 className="text-xl md: text-2xl font-bold">My Projects</h1>
        <RedirectIconButton
          text="Add Project"
          href="/backoffice/my-projects/add-project"
          variant={"destructive"}
          icon={<PlusIcon />}
        />
      </div>
      <div className="container max-w-screen-2xl mx-auto py-4">
        {/* <DataTableDemo /> */}
        <ProjectTable />
      </div>
    </div>
  );
}

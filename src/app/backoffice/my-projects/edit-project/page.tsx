import { MutationHeader } from "@/components/MutationHeader";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col">
      <MutationHeader href="/backoffice/my-projects" text="Edit project" />
    </div>
  );
}

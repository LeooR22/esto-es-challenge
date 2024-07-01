import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col ">
      {/* Create a header in the left add text with my projects and the left a button with text add project */}
      <div className="flex w-full justify-between items-center border px-3 md:px-10 py-2">
        <h1 className="text-xl md: text-2xl font-bold">My Projects</h1>
        <Button variant="destructive">Add Project</Button>
      </div>
    </div>
  );
}

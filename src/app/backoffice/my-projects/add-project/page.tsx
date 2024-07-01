import { MutationHeader } from "@/components/MutationHeader";
import { RedirectIconButton } from "@/components/RedirectIconButton";
import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full flex-col">
      <MutationHeader href="/backoffice/my-projects" text="Add project" />
    </div>
  );
}

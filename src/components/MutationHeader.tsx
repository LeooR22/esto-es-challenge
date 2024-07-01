import React, { FC } from "react";
import { RedirectIconButton } from "./RedirectIconButton";
import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";

interface Props {
  text: string;
  href: string;
}

export const MutationHeader: FC<Props> = ({ text, href }) => {
  return (
    <div className="flex w-full items-center border px-3 md:px-10 py-2 gap-4">
      <RedirectIconButton
        text="back"
        href={href}
        variant={"outline"}
        icon={<ArrowLeftIcon />}
      />
      <h1 className="text-xl md:text-2xl font-bold">{text}</h1>
    </div>
  );
};

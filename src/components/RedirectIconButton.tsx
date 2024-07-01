"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { IButtonVariants } from "@/interfaces/buttonVariants";

interface Props {
  text: string;
  icon: React.ReactNode;
  href: string;
  variant?: IButtonVariants;
}

export const RedirectIconButton: FC<Props> = ({
  text,
  icon,
  href,
  variant,
}) => {
  const router = useRouter();

  return (
    <Button variant={variant} onClick={() => router.push(href)}>
      {icon}
      <span className="ml-2 font-medium">{text}</span>
    </Button>
  );
};

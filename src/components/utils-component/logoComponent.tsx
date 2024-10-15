import React from "react";
import { Separator } from "../ui/separator";

interface LogoComponentProps {
  imgUrl: string;
  title: string;
  subTitle?: string;
}

export default function LogoComponent({
  imgUrl,
  title,
  subTitle,
}: LogoComponentProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 sm:flex">
        <img src={imgUrl} />
      </div>
      <div className="flex gap-1 xs:hidden">
        <Separator
          orientation="vertical"
          className="mx-0 h-10 w-px xs:hidden"
        />
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}

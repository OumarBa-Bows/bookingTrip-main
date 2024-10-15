 
import React, { ReactNode } from "react";
 

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = (props: ContentLayoutProps) => (
  <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    {props?.children}
  </main>
);

export default ContentLayout;

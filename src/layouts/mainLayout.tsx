 
import ContentLayout from "@/components/layout-components/contentLayout";
import HeaderLayout from "../components/layout-components/headerLayout";
import SideNav from "../components/shared-components/sideNav";
import AppViews from "@/views";
import React from "react";
 
const  AppLayout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNav />
      <div className="flex flex-col">
        <HeaderLayout />
        <ContentLayout >
          <AppViews/>
        </ContentLayout>
      </div>
    </div>
  )
}


export default  AppLayout;
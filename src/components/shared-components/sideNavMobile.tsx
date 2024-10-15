import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import IconDataComponent from "../utils-component/iconDataComponent";
import { INavigateItems } from "@/models/navigationItem";
import { sideNavItems } from "@/configs/navigationConfig";
import { Link } from "react-router-dom";
import SideNavFooter from "./sideNavFooter";

export default function SideNavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-black">
        {sideNavItems.map((item: INavigateItems) => (
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
              <Link
                key={item?.key}
                to={`/app${item?.path}`}
                children={
                  <>
                    <IconDataComponent icon={item?.icon} height={7} width={7} />
                    <div style={{ fontSize: "14px" }}> {item?.title}</div>
                  </>
                }
                className="flex items-center text-white   gap-3 fs-50 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-blue"
              />
            }
          </nav>
        ))}
        <div className="mt-auto">
          <SideNavFooter />
        </div>
      </SheetContent>
    </Sheet>
  );
}

import { sideNavItems } from "@/configs/navigationConfig";
import { INavigateItems } from "@/models/navigationItem";
import { Link } from "react-router-dom";
import IconDataComponent from "../utils-component/iconDataComponent";
import ImageComponent from "../utils-component/imageComponent";
import logo from "@/assets/images/map-image.jpg";
import SideNavFooter from "./sideNavFooter";

const SideNav = () => {
  console.log("===>", sideNavItems[0].path);
  return (
    <div
      className="hidden border-r bg-muted/40 md:block"
      style={{ backgroundColor: "black" }}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <ImageComponent imgUrl={logo} />
            <span className="">DreamTrip</span>
          </a>
        </div>

        <div className="flex-1 mt-10">
          {sideNavItems.map((item: INavigateItems) => (
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {
                <Link
                  key={item?.key}
                  to={`/app${item?.path}`}
                  children={
                    <>
                      <IconDataComponent
                        icon={item?.icon}
                        height={7}
                        width={7}
                      />
                      <div style={{ fontSize: "14px" }}> {item?.title}</div>
                    </>
                  }
                  className="flex items-center text-white gap-3 fs-50 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-blue"
                />
              }
            </nav>
          ))}
        </div>

        <div className="mt-auto p-4">
          <SideNavFooter />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

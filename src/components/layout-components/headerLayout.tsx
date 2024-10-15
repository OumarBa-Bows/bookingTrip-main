import {
  Badge,
  Bell,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Lock,
} from "lucide-react";

import SearchComponent from "../shared-components/searchComponent";
import HeaderComponentMobile from "../shared-components/sideNavMobile";
import { useNavigate } from "react-router-dom";
import { removeFromStorage } from "@/hooks/useStorage";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    removeFromStorage("token");
    navigate("/auth/login", { replace: true });
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <HeaderComponentMobile />
      <div className="w-full flex-1">
        <SearchComponent />
      </div>

      <Bell />
      <Lock onClick={handleLogOut} />
    </header>
  );
};

export default HeaderLayout;

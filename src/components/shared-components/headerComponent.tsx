import LogoComponent from "../utils-component/logoComponent";
import logo from "@/assets/images/image-login.jpg";
import { Button } from "../ui/button";

export default function HeaderComponent() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-black px-4 md:px-6">
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="relative text-white">
          <LogoComponent
            imgUrl={logo}
            title="DreamTrip"
            subTitle="Travel from home"
          />
        </div>
      </div>
      <Button className="bg-white text-black">Créer un compte</Button>{" "}
      {/* Fixed typo */}
    </header>
  );
}

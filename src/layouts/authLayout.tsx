import { Button } from "@/components/ui/button";
import imageLogin from "@/assets/images/image-login.jpg";
import { LoginForm } from "@/views/auth/login";
import HeaderComponent from "@/components/shared-components/headerComponent";
import FooterComponent from "@/components/shared-components/footerComponent";
import AuthViews from "@/views/auth";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeaderComponent />
      <main
        className="flex items-center justify-center flex-row gap-4 p-4 md:gap-12 md:p-12"
        style={{
          backgroundImage: `url(${imageLogin})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AuthViews />
      </main>
      <FooterComponent />
    </div>
  );
}

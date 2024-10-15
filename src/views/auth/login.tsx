import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AuthCard from "@/helpers/authCard";

import AppForm from "@/helpers/form";
import { loginSchema } from "@/hooks/useFormSchema";
import { saveToStorage } from "@/hooks/useStorage";
import { useAuth } from "@/store/authStore";
import { User2 } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();

  const { loading, login } = useAuth((state) => ({
    loading: state.loading,
    login: state.login,
  }));

  const handleSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
    if (values) return login(values);
    // saveToStorage("token", "1234556");
    navigate("/app/home");
  };

  return (
    <AuthCard
      childrenCardHeader={
        <div className="flex items-center justify-center">
          <User2 height={100} width={100} />
        </div>
      }
      childrenCardContent={
        <>
          <AppForm
            schema={loginSchema}
            defaultValues={{}}
            onSubmit={handleSubmit}
            fields={[
              {
                name: "username",
                label: "Nom d'utilisateur",
              },
              {
                name: "password",
                label: "Mot de passe",
              },
            ]}
            loading={loading}
          />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </>
      }
    />
  );
}

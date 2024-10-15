import { saveToStorage } from "@/hooks/useStorage";
import { UseAuthProps } from "@/models/storeProps/authProps";
import { AuthService } from "@/services/authServices";
import { create } from "zustand";

const authServices = new AuthService();

export const useAuth = create<UseAuthProps>((set) => ({
  loading: false,

  login: (payload) => {
    set({ loading: true });

    const token = '@usernLoggedIn' ;
    saveToStorage('token' , token);
    set({ loading: false });

    // authServices
    //   .loginForm(payload)
    //   .then((res) => {
    //     console.log("first", res);
    //     set({ loading: false });
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     set({ loading: false });
    //   });
  },
}));

import axiosInstance from "@/configs/apiConfig";
import { LOGIN_ENDPOINT } from "@/configs/endpoints";
import { LoginModel } from "@/models/login";

export class AuthService {
   
    loginForm = (payload : LoginModel) => {
       return axiosInstance.post(LOGIN_ENDPOINT , payload);
    }
};
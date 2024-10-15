import { LoginModel } from "../login";

export interface UseAuthProps {
    loading: boolean;
    login:(payload : LoginModel) => void;
  }
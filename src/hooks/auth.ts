import { retrieveFromStorage } from "./useStorage";

export const useAuthenticated = () => {
   const token = retrieveFromStorage('token');
   
   return !!token;
}
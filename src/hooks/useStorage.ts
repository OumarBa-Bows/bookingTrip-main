export const saveToStorage = (key : string , data :any) => localStorage.setItem(key , data) ;


export const retrieveFromStorage = (key : string) => localStorage.getItem(key) ;


export const removeFromStorage =(key : string) => localStorage.removeItem(key) ;
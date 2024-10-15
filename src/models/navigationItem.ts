import { IconNode } from "lucide-react";

export interface INavigateItems {
    key: string,
    path:string,
    title:string,
    subItems ?: INavigateItems[],
    icon: any,
    badge? : number,
    active?:boolean
};
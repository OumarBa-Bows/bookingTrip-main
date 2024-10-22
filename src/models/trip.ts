import { Town } from "./town";

export interface Trip{
    origin: Town;
    destination: Town;
    tripDate: Date;
    tripartureTime: Date;
    prix: number;
}
export interface IBookings {
    id: number;
    clientPhoneNumber:number;
    clientName:string;
    price:number,
    departure:string;
    arrival:string;
    status:boolean;
    createdAt:Date;

}
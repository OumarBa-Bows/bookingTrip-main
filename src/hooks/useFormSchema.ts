import { z } from "zod";

export const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
}).required();


export const tripSchema = z.object({
    departureDate : z.string(),
    departureTime : z.string(),
    seats: z.string(), // Ensure seats is a positive integer
    price:z.string(),
    driver:z.string(),
    vehicleType:z.string(),
    approvalType:z.string(),
    departure:z.string(),
arrival:z.string(),

    
});

export const zoneSchema = z.object({
  departureCity : z.string(),
  destinationCity : z.string(),
  routes:z.array(z.number())
});

export const checkSubscriptionSchema = z.object({
   subscriptionType : z.string(),
   code:z.string()
});

export const passangerSchema = z.object({
    fullName : z.string(),
    telephone : z.string(),
    destination : z.string(),
    payment : z.string(),
    price:z.string()
     
});

export const luggageSchema = z.object({
  receveurNumber : z.string(),
  senderNumber : z.string(),
  destination : z.string(),
  payment : z.string(),
  delivred:z.string(),
  price:z.string()
   
});

export const employeeSchema = z.object({
  fullName : z.string(),
  telephone : z.string(),
  position : z.string(),
  salary : z.string(),
   
});

export const driverSchema = z.object({
  fullName : z.string(),
  telephone : z.string(),
  travelLine : z.string(),
  salary : z.string(),
   
});

export const vehicleSchema = z.object({
  brand : z.string(),
  type : z.string(),
   
});

export const townSchema = z.object({
  name: z.string(),
  code: z.string()
})
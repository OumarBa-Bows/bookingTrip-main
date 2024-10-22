import { Town } from "@/models/town";
import axiosInstance from '../configs/apiConfig';
import { TOWN_ENDPOINT } from "@/configs/endpoints";
import { Trip } from "@/models/trip";

export class tripService{

    create(payload: Trip){
      return  axiosInstance.post(TOWN_ENDPOINT+'/create',payload)
    }

    update(payload: Trip){
        return  axiosInstance.post(TOWN_ENDPOINT+'/update',payload);
    }

    delete(id: number){
        return  axiosInstance.post(TOWN_ENDPOINT+'/delete',id);
    }
}
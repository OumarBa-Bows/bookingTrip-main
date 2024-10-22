import { Town } from "@/models/town";
import axiosInstance from '../configs/apiConfig';
import { TOWN_ENDPOINT } from "@/configs/endpoints";

export class TownService{

    create(payload: Town){
      return  axiosInstance.post(TOWN_ENDPOINT+'/create',payload)
    }

    imort(file: File){
        return  axiosInstance.post(TOWN_ENDPOINT+'/import',file);
    }
}
import AppForm from "@/helpers/form";
import { tripSchema } from "@/hooks/useFormSchema";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof tripSchema>;

export default function SetTripInformation() {

    const handleSubmit: SubmitHandler<FormData> = (values) => {
        console.log(values);
      };

  return (<>
    <AppForm
    schema={tripSchema}
    defaultValues={{}}
    onSubmit={handleSubmit}
    fields={[
      {
        name:'departure',
        label:'Ville de depart',
        type:'select',
        options : [{value : 1 , label : 'Nouakchott'} , {value : 2 , label : 'chott'},{value : 3 , label : 'Nott'}]
      },
      {
        name:'arrival',
        label:'Ville de destination',
        type:'select',
        options : [{value : 1 , label : 'Nouakchott'} , {value : 2 , label : 'chott'},{value : 3 , label : 'Nott'}]
      },
      {
        name: 'price',
        label: 'Prix',
        type: 'number'
         
      },
      {
        name: 'seats',
        label: 'Place disponible',
        type: 'number'
         
      },
      {
        name: 'vehicleType',
        label: 'Type de vehicle',
         
      },
      {
        name: 'approvalType',
        label: 'Type de validation',
        
         
      },
      {
        name: 'driver',
        label: 'Chauffeur',
        
         
      }, {
        name: 'departureDate',
        label: 'Date de depart',
        type: 'date'
         
      },{
        name: 'departureTime',
        label: 'Heure de depart',
        type: 'date'
         
      },
       
      
    ]}
    
  />
      

 </>

  );
}

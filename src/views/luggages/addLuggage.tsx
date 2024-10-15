import AppForm from '@/helpers/form';
import { luggageSchema } from '@/hooks/useFormSchema';
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof luggageSchema>;

export default function AddLuggage() {
    const handleSubmit: SubmitHandler<FormData> = (values) => {
        console.log(values);
      };
    
      return (
        <AppForm
          schema={luggageSchema}
          defaultValues={undefined}
          onSubmit={handleSubmit}
          fields={[
            { name: "receveurNumber", label: "Numero du beneficiaire" },
            { name: "senderNumber", label: "Numero de l'expediteur" },
            { name: "price", label: "Prix du colis" },
            
            {
              name: "destination",
              label: "Destination",
              type: "select",
              options: [],
            },
            {
              name: "payment",
              label: "Methode payment",
              type: "select",
              options: [],
            },
          ]}
        />
      );
}

import AppForm from "@/helpers/form";
import { passangerSchema } from "@/hooks/useFormSchema";

import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof passangerSchema>;

export default function AddPassanger() {
  
  const handleSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
  };

  return (
    <AppForm
      schema={passangerSchema}
      defaultValues={undefined}
      onSubmit={handleSubmit}
      fields={[
        { name: "fullName", label: "Nom complet" },
        { name: "telephone", label: "Numero de telephone" },
        { name: "price", label: "Prix du billet" },
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

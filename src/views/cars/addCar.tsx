import AppForm from "@/helpers/form";
import { vehicleSchema } from "@/hooks/useFormSchema";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof vehicleSchema>;

export default function AddCAddCar() {
  const handleSubmit: SubmitHandler<FormData> = (values) => {
    console.log(values);
  };
  return (
    <AppForm
      schema={vehicleSchema}
      defaultValues={[]}
      onSubmit={handleSubmit}
      fields={[
        { name: "brand", label: "Marque" },
        { name: "type", label: "Type du vehycle", type: "select", options: [] },
      ]}
    />
  );
}

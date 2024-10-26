import AppForm from "@/helpers/form";
import { townSchema } from "@/hooks/useFormSchema";
import { FieldValues } from "react-hook-form";

export default function AddTown() {
  return (
    <AppForm
      schema={townSchema}
      defaultValues={undefined}
      onSubmit={() => console.log("dsfsd")}
      fields={[
        { name: "name", label: "Nom ville" },
        { name: "code", label: "Code" },
      ]}
    ></AppForm>
  );
}

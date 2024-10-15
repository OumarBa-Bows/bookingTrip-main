import AppForm from '@/helpers/form';
import { employeeSchema } from '@/hooks/useFormSchema';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof employeeSchema>

export default function AddEmployee() {
    const handleSubmit: SubmitHandler<FormData> = (values) => {
        console.log(values);
      };
    return (
    <AppForm schema={employeeSchema} defaultValues={[]} onSubmit={handleSubmit} fields={[
        {name:'fullName' , label:'Nom complet'},
        {name:'telephone' , label: 'Numero de telephone' , type:'number'  },
        {name:'position' , label:'Poste'},
        {name:'salary', label:'Salaire', type:'number'}
    ]} />
  );
}

import AppForm from '@/helpers/form';
import { driverSchema } from '@/hooks/useFormSchema';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

type FormData = z.infer<typeof driverSchema>

export default function AddDriver() {
    const handleSubmit: SubmitHandler<FormData> = (values) => {
        console.log(values);
      };
  return (
    <AppForm schema={driverSchema} defaultValues={[]} onSubmit={handleSubmit} fields={[
        {name:'fullName' , label:'Nom complet'},
        {name:'telephone' , label: 'Numero de telephone' , type:'number'  },
        {name:'travelLine' , label:'Ligne'},
        {name:'salary', label:'Salaire', type:'number'}
    ]} />
  );
}

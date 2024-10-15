import { useForm, SubmitHandler, FieldValues, Control, Path } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodSchema } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import AppButton from '@/helpers/button';
import AppSelect from './select';

interface AppFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  defaultValues: any;
  onSubmit: SubmitHandler<T>;
  fields: Array<{
    name: Path<T>;
    label: string;
    type?: 'text' | 'password' | 'email' | 'number'| 'date' | 'select'  ; // Add other types as needed
    description?: string;
    options?:any
  }>;
  loading?:boolean;
  appSelect? :React.ReactNode
}

function AppForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  fields,
  loading,
  appSelect
}: AppFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues  
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-8">
        <div className={fields.length > 2 ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4`:'grid gap-4'}>
        {fields.map((field) => (
          <div className="">
          <FormField 
            key={field.name as string}
            control={form.control as Control<T>}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                      {field.type === 'select' && field.options ? (
                        
                        <AppSelect
                          dataList={field.options}
                          defaultValue={formField.value}
                          placeHolder={field.label}
                          textLabel={field.label}
                          value={formField.value} // Bind value from react-hook-form
                          onChange={formField.onChange} 
                          width='full'// Pass onChange to react-hook-form
                        />
                      ) : (
                        // Default Input
                        <Input
                          type={field.type}
                          placeholder={field.label}
                          {...formField}
                        />
                      )}
                    </FormControl>
               
                {field.description && (
                  <FormDescription>{field.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
        ))}
        </div>
        <AppButton textButton="Submit" type="submit" className='w-full' disabled={loading} />
      </form>
    </Form>
  );
}

export default AppForm;

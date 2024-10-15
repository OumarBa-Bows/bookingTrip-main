import { data } from '@/_mock/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import RenderTable from '@/helpers/table';
import { PlusCircle } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { bookingColumns } from '../bookings/bookingsColumn';
import AppCard from '@/helpers/card';
import SearchComponent from '@/components/shared-components/searchComponent';
import AppSelect from '@/helpers/select';
import AppModal from '@/helpers/modal';
import AddDriver from './addDriver';

export default function Drivers() {
  const navigate = useNavigate();
  return (
    <>
   <AppCard
        title={"Liste des reservation"}
        childrenTitleContent={
          <> 
          <SearchComponent layout='content'/>
          <AppSelect dataList={undefined} placeHolder={"Payment"} textLabel={""} defaultValue={""} />
          <AppSelect dataList={undefined} placeHolder={"Status"} textLabel={""} defaultValue={""} />
          <AppSelect dataList={undefined} placeHolder={"Date"} textLabel={""} defaultValue={""} />
       </>
        }
        ChildrenExtraContent={
          <AppModal textButton={'Ajouter chauffeur'} title={'Ajouter chauffeur'} description={''} childrenContent={<AddDriver />} />
        }
        childrenContent={
          <RenderTable
            dataTable={data}
            columnTable={bookingColumns}
            actions={<Button>Edit</Button>}
          />
        }
      />
    </>
    
  )
}

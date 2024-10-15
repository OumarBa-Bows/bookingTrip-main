import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import RenderTable from '@/helpers/table'
 
import { ListFilter, PlusCircle } from 'lucide-react'
import React from 'react'
import { bookingColumns } from '../bookings/bookingsColumn'
import { data } from '@/_mock/mockData';
import { useNavigate } from 'react-router-dom';
import AppCard from '@/helpers/card';
import AppModal from '@/helpers/modal';
import SetTripInformation from './setInformation';
import SearchComponent from '@/components/shared-components/searchComponent';
import AppSelect from '@/helpers/select';

export default function TripManagementPage() {
  const navigate = useNavigate();
  return (<>
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
        childrenContent={
          <RenderTable
            dataTable={data}
            columnTable={bookingColumns}
            actions={<Button>Edit</Button>}
          
          />
        }

        ChildrenExtraContent={
          <AppModal textButton={'Publier un voyage'} title={'Ajouter un voyage'} description={''} childrenContent={<SetTripInformation />} />
        }
      />
  </>
  )
}
